"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

type AnswerValue =
  | "ja"
  | "nein"
  | "teilweise"
  | "keine"
  | "kleinere"
  | "größere"
  | "nachaudit";

interface Question {
  id: number;
  category: string;
  text: string;
  options: { value: AnswerValue; label: string; points: number }[];
}

const questions: Question[] = [
  // Kategorie 1: WPK-System
  {
    id: 1,
    category: "WPK-System",
    text: "Besitzt Ihr Betrieb ein dokumentiertes WPK-Handbuch nach EN 1090-1?",
    options: [
      { value: "ja", label: "Ja, vollständig", points: 10 },
      { value: "teilweise", label: "In Bearbeitung", points: 5 },
      { value: "nein", label: "Nein", points: 0 },
    ],
  },
  {
    id: 2,
    category: "WPK-System",
    text: "Wurde das WPK-Handbuch in den letzten 12 Monaten aktualisiert?",
    options: [
      { value: "ja", label: "Ja, aktuell", points: 10 },
      {
        value: "teilweise",
        label: "Keine Änderungen nötig gewesen",
        points: 8,
      },
      { value: "nein", label: "Nein, länger nicht", points: 0 },
    ],
  },
  {
    id: 3,
    category: "WPK-System",
    text: "Ist der aktuelle Schweisskoordinator im WPK dokumentiert und nach ISO 14731 qualifiziert?",
    options: [
      { value: "ja", label: "Ja, nachgewiesen", points: 10 },
      { value: "teilweise", label: "Bin unsicher", points: 5 },
      { value: "nein", label: "Nein / kein Schweisskoordinator", points: 0 },
    ],
  },
  // Kategorie 2: Schweisserzeugnisse
  {
    id: 4,
    category: "Schweisserzeugnisse",
    text: "Sind alle ISO 9606-1 Schweisserzeugnisse Ihrer Schweisser gültig (nicht abgelaufen)?",
    options: [
      { value: "ja", label: "Ja, alle gültig", points: 10 },
      { value: "teilweise", label: "Einige abgelaufen", points: 3 },
      { value: "nein", label: "Nein / weiss nicht", points: 0 },
    ],
  },
  {
    id: 5,
    category: "Schweisserzeugnisse",
    text: "Decken Ihre gültigen WPQR alle aktuell eingesetzten Verfahren, Werkstoffe und Positionen ab?",
    options: [
      { value: "ja", label: "Ja, vollständig abgedeckt", points: 10 },
      { value: "teilweise", label: "Unsicher / teilweise", points: 5 },
      { value: "nein", label: "Nein, es gibt Lücken", points: 0 },
    ],
  },
  {
    id: 6,
    category: "Schweisserzeugnisse",
    text: "Haben Sie für alle Schweissnähte aktuelle WPS vorliegen?",
    options: [
      { value: "ja", label: "Ja, für alle", points: 10 },
      { value: "teilweise", label: "Teilweise", points: 5 },
      { value: "nein", label: "Nein", points: 0 },
    ],
  },
  // Kategorie 3: Dokumentation
  {
    id: 7,
    category: "Dokumentation",
    text: "Sind alle Materialnachweise (EN 10204 Typ 3.1) der letzten 12 Monate archiviert und auffindbar?",
    options: [
      { value: "ja", label: "Ja, alles auffindbar", points: 10 },
      { value: "teilweise", label: "Teilweise", points: 5 },
      { value: "nein", label: "Nein", points: 0 },
    ],
  },
  {
    id: 8,
    category: "Dokumentation",
    text: "Haben Sie eine aktuelle ZfP-Planung (Sichtprüfung, ZfP nach Ausführungsklasse) dokumentiert?",
    options: [
      { value: "ja", label: "Ja, dokumentiert", points: 10 },
      { value: "teilweise", label: "Nicht nötig (EXC1)", points: 8 },
      { value: "nein", label: "Nein", points: 0 },
    ],
  },
  {
    id: 9,
    category: "Dokumentation",
    text: "Können Sie das komplette WPK-Dokument innerhalb von 1 Stunde zusammenstellen?",
    options: [
      { value: "ja", label: "Ja, innerhalb 1 Stunde", points: 10 },
      { value: "teilweise", label: "Brauche 1-2 Tage", points: 3 },
      { value: "nein", label: "Nein, mehrere Tage", points: 0 },
    ],
  },
  {
    id: 10,
    category: "Audit-Erfahrung",
    text: "Hat Ihr Betrieb beim letzten Überwachungsaudit Mängelanmerkungen erhalten?",
    options: [
      { value: "keine", label: "Keine Mängel", points: 10 },
      { value: "kleinere", label: "Kleinere Mängel", points: 5 },
      { value: "größere", label: "Grössere Mängel", points: 0 },
      { value: "nachaudit", label: "Nachaudit notwendig", points: -5 },
    ],
  },
];

const categories = [
  "WPK-System",
  "Schweisserzeugnisse",
  "Dokumentation",
  "Audit-Erfahrung",
];

export function AuditCheck() {
  const [answers, setAnswers] = useState<Record<number, AnswerValue>>({});
  const [showResult, setShowResult] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(0);

  const currentCategoryName = categories[currentCategory];
  const currentQuestions = questions.filter(
    (q) => q.category === currentCategoryName,
  );
  const answeredInCategory = currentQuestions.filter(
    (q) => answers[q.id] !== undefined,
  ).length;
  const allAnswered = questions.every((q) => answers[q.id] !== undefined);

  const calculateScore = () => {
    let total = 0;
    questions.forEach((q) => {
      const answer = answers[q.id];
      if (answer) {
        const option = q.options.find((o) => o.value === answer);
        if (option) total += option.points;
      }
    });
    return Math.max(0, Math.min(100, total)); // Max 100 (10 questions x 10 points)
  };

  const score = showResult ? calculateScore() : 0;

  const getScoreLevel = (s: number) => {
    if (s >= 80)
      return {
        level: "gruen",
        label: "Sehr gut aufgestellt",
        color: "text-green-600",
      };
    if (s >= 50)
      return {
        level: "orange",
        label: "Handlungsbedarf",
        color: "text-orange-600",
      };
    return {
      level: "rot",
      label: "Kritisch — Sofortmassnahmen empfohlen",
      color: "text-red-600",
    };
  };

  const getWeakAreas = () => {
    return questions
      .filter((q) => {
        const answer = answers[q.id];
        if (!answer) return false;
        const option = q.options.find((o) => o.value === answer);
        return option && option.points < 8;
      })
      .map((q) => q.category);
  };

  const handleAnswer = (questionId: number, value: AnswerValue) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const nextCategory = () => {
    if (currentCategory < categories.length - 1) {
      setCurrentCategory((c) => c + 1);
    } else {
      setShowResult(true);
    }
  };

  const prevCategory = () => {
    if (currentCategory > 0) setCurrentCategory((c) => c - 1);
  };

  const reset = () => {
    setAnswers({});
    setShowResult(false);
    setCurrentCategory(0);
  };

  if (showResult) {
    const level = getScoreLevel(score);
    const weakAreas = [...new Set(getWeakAreas())];

    return (
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom max-w-2xl">
          <div className="bg-background rounded-2xl border border-border p-8 text-center shadow-sm">
            <h2 className="text-2xl font-bold mb-2">Ihr Compliance-Score</h2>
            <p className="text-muted-foreground mb-8">
              Basierend auf Ihren Antworten zu 10 Bereichen
            </p>

            {/* Score Display */}
            <div className="relative mb-8">
              <div className="w-36 h-36 rounded-full mx-auto flex items-center justify-center border-8 border-primary/20 bg-primary/5">
                <div>
                  <div className={`text-5xl font-bold ${level.color}`}>
                    {score}
                  </div>
                  <div className="text-sm text-muted-foreground">/ 100</div>
                </div>
              </div>
            </div>

            {/* Level Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                level.level === "gruen"
                  ? "bg-green-100 text-green-700"
                  : level.level === "orange"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-red-100 text-red-700"
              }`}
            >
              {level.level === "gruen" ? (
                <CheckCircle className="h-4 w-4" />
              ) : level.level === "orange" ? (
                <AlertTriangle className="h-4 w-4" />
              ) : (
                <XCircle className="h-4 w-4" />
              )}
              {level.label}
            </div>

            {/* Message */}
            <p className="text-muted-foreground mb-6">
              {level.level === "gruen"
                ? "Sehr gut aufgestellt. Weiter so — und AuditReady hält diesen Stand automatisch aufrecht."
                : level.level === "orange"
                  ? `Handlungsbedarf in ${weakAreas.length} Bereichen. Mit AuditReady können Sie diese Lücken systematisch schliessen.`
                  : "Kritisch. Ihr Betrieb hat erhebliche Compliance-Lücken. Sofortmassnahmen empfohlen — AuditReady hilft Ihnen dabei."}
            </p>

            {/* Weak Areas */}
            {weakAreas.length > 0 && (
              <div className="text-left bg-muted/30 rounded-xl p-4 mb-6">
                <h3 className="font-semibold mb-2 text-sm">
                  Bereiche mit Handlungsbedarf:
                </h3>
                <ul className="space-y-1">
                  {weakAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <AlertTriangle className="h-3 w-3 text-orange-500 flex-shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <Button asChild size="lg">
                <Link href="/wpk-software#beta-anmeldung">
                  AuditReady schliesst diese Lücken — kostenlos testen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" onClick={reset}>
                Check wiederholen
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium mb-4">
            Kostenloses Tool
          </div>
          <h1 className="heading-hero mb-3">
            EN 1090 Audit-Bereitschafts-Check
          </h1>
          <p className="text-xl text-muted-foreground">
            10 Fragen — 3 Minuten — Ihr persönlicher Compliance-Score
          </p>
        </div>
      </section>

      {/* Quiz */}
      <section className="py-8 pb-16">
        <div className="container-custom max-w-2xl">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>
                Kategorie {currentCategory + 1} von {categories.length}:{" "}
                {currentCategoryName}
              </span>
              <span>
                {Object.keys(answers).length} / {questions.length} beantwortet
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{
                  width: `${(Object.keys(answers).length / questions.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Questions for current category */}
          <div className="space-y-6">
            {currentQuestions.map((q, idx) => (
              <div
                key={q.id}
                className="bg-background rounded-xl border border-border p-6 shadow-sm"
              >
                <p className="font-medium mb-4">
                  <span className="text-primary font-bold mr-2">
                    {questions.indexOf(q) + 1}.
                  </span>
                  {q.text}
                </p>
                <div className="space-y-2">
                  {q.options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(q.id, option.value)}
                      className={`w-full text-left px-4 py-3 rounded-lg border transition-all text-sm ${
                        answers[q.id] === option.value
                          ? "border-primary bg-primary/10 text-primary font-medium"
                          : "border-border hover:border-primary/40 hover:bg-muted/50"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={prevCategory}
              disabled={currentCategory === 0}
            >
              Zurück
            </Button>
            <Button
              onClick={nextCategory}
              disabled={answeredInCategory < currentQuestions.length}
            >
              {currentCategory === categories.length - 1
                ? "Score berechnen"
                : "Weiter"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {answeredInCategory < currentQuestions.length && (
            <p className="text-center text-sm text-muted-foreground mt-3">
              Bitte alle Fragen in dieser Kategorie beantworten um fortzufahren.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
