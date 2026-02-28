"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Gauge,
  Search,
  Bell,
  FileDown,
  CheckSquare,
  Users,
  Archive,
  TrendingUp,
  Shield,
  Cloud,
  Lock,
  Flag,
  Check,
  ArrowRight,
  Wrench,
  Building2,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const betaSchema = z.object({
  company: z.string().min(1, "Firma ist erforderlich"),
  name: z.string().min(2, "Name ist erforderlich"),
  email: z.string().email("Gültige E-Mail erforderlich"),
});
type BetaFormData = z.infer<typeof betaSchema>;

// 1. HERO
function HeroSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="container-custom text-center max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Beta-Badge */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-primary" />
              </span>
              BETA-PHASE — Jetzt kostenlos testen
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="heading-hero mb-6 text-balance"
          >
            WPK Software für Metallbau —
            <br />
            <span className="text-primary">Immer audit-bereit mit EN 1090</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            AuditReady digitalisiert Ihr WPK-System nach EN 1090, berechnet
            automatisch Ihren Compliance-Score und generiert das vollständige
            Audit-Paket auf Knopfdruck — für TÜV, DNV, SLV und Metall-Zert.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 h-12 px-8"
              asChild
            >
              <a href="#beta-anmeldung">
                Kostenlos Beta-Zugang sichern
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8" asChild>
              <a href="#module">Module ansehen</a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              DSGVO-konform
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              Keine Kreditkarte nötig
            </span>
            <span className="flex items-center gap-2">
              <Cloud className="h-4 w-4 text-primary" />
              EN 1090-1 konform
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// 2. PROBLEM SECTION
function ProblemSection() {
  const problems = [
    {
      icon: Search,
      title: "Tagelange Dokumenten-Suche",
      desc: "WPS, Schweißerzeugnisse und Materialnachweise verteilt auf Ordner, Excel-Dateien und verschiedene PCs. Das komplette Audit-Paket zusammenstellen dauert Tage statt Minuten.",
    },
    {
      icon: Bell,
      title: "Unbemerkt abgelaufene Zeugnisse",
      desc: "ISO 9606-1-Zeugnisse laufen alle 2 Jahre ab. Im Tagesgeschäft vergisst man es — und der Auditor findet abgelaufene Zeugnisse als ersten und häufigsten Mangelbefund.",
    },
    {
      icon: TrendingUp,
      title: "Risiko des Zertifikatsentzugs",
      desc: "Ein Nachaudit kostet Zeit und Geld. Im schlimmsten Fall wird das EN 1090-Zertifikat ausgesetzt — und damit die Berechtigung, CE-gekennzeichnete Stahlbauteile herzustellen.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="heading-section">
              Die Herausforderung: Audit-Vorbereitung in der Praxis
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              EN 1090-Betriebe führen ihr WPK-System mehrheitlich in Word, Excel
              und Papierordnern — mit vorhersehbaren Konsequenzen beim
              Überwachungsaudit.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeInUp}
                className="border rounded-xl p-6 bg-card"
              >
                <p.icon className="h-10 w-10 text-destructive mb-4" />
                <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// 3. SOLUTION SECTION
function SolutionSection() {
  const features = [
    {
      icon: Gauge,
      title: "WPK-Cockpit",
      desc: "Alle WPK-Daten zentral, tagesaktuell, für alle Beteiligten.",
    },
    {
      icon: TrendingUp,
      title: "Compliance-Score 0–100%",
      desc: "Automatisch berechnet, ampelbasiert, stets aktuell.",
    },
    {
      icon: Search,
      title: "Gap-Analyse",
      desc: "Automatische Erkennung aller Compliance-Lücken vor dem Audit.",
    },
    {
      icon: Bell,
      title: "Ablauf-Erinnerungen",
      desc: "60 und 30 Tage vor Ablauf per E-Mail benachrichtigt.",
    },
    {
      icon: FileDown,
      title: "Audit-Paket-Generator",
      desc: "Ein Klick — druckfertiges PDF für TÜV, DNV, Metall-Zert, SLV.",
    },
    {
      icon: CheckSquare,
      title: "WPS-Abdeckungscheck",
      desc: "Matrix: Welche Verfahren, Werkstoffe, Positionen sind abgedeckt?",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="heading-section">
              Die Lösung: AuditReady WPK Software
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Das erste spezialisierte WPK-Cockpit für Metallbau- und
              Stahlbau-Betriebe im DACH-Raum.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeInUp}
                className="flex items-start gap-4 p-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// 4. QUOTE BANNER
function QuoteBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
      <div className="container-custom text-center">
        <p className="text-2xl md:text-3xl font-medium italic max-w-3xl mx-auto">
          &quot;Von der Gap-Analyse bis zum druckfertigen Audit-Paket — alles in
          einer Plattform, in weniger als 2 Stunden eingerichtet.&quot;
        </p>
        <p className="mt-4 text-primary-foreground/70 text-sm">
          AuditReady Produktversprechen
        </p>
      </div>
    </section>
  );
}

// 5. MODULES SECTION
function ModulesSection() {
  const modules = [
    {
      icon: Gauge,
      name: "WPK-Cockpit",
      desc: "Zentrales Dashboard mit allen WPK-Kennzahlen. Status auf einen Blick.",
    },
    {
      icon: TrendingUp,
      name: "Compliance-Score",
      desc: "Tagesaktueller Score 0–100%, Ampel-System, EXC2/EXC3 separat bewertbar.",
    },
    {
      icon: Search,
      name: "Gap-Analyse",
      desc: "Automatische Lückenerkennung mit priorisierten Handlungsempfehlungen.",
    },
    {
      icon: Users,
      name: "Schweißerzeugnisse-Manager",
      desc: "Alle ISO 9606-1-Zeugnisse mit Ablaufdatum und automatischen Erinnerungen.",
    },
    {
      icon: CheckSquare,
      name: "WPS-Abdeckungsmatrix",
      desc: "Welche Verfahren, Werkstoffgruppen und Positionen sind durch WPQR gedeckt?",
    },
    {
      icon: FileDown,
      name: "Audit-Paket-Generator",
      desc: "Ein-Klick PDF-Paket mit Inhaltsverzeichnis für alle notifizierten Stellen.",
    },
    {
      icon: Archive,
      name: "Dokumenten-Archiv",
      desc: "EN 10204-Materialnachweise, ZfP-Protokolle, versioniert und durchsuchbar.",
    },
    {
      icon: Bell,
      name: "Aufgaben & Maßnahmen",
      desc: "Maßnahmenplan aus der Gap-Analyse mit Verantwortlichen und Fristen.",
    },
    {
      icon: Layers,
      name: "WPK-Handbuch-Editor",
      desc: "Digitales WPK-Handbuch nach EN 1090-1, mit Vorlagen für EXC2 und EXC3.",
    },
  ];

  return (
    <section id="module" className="py-16 md:py-24">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="heading-section">Module & Funktionen</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              AuditReady deckt alle Bereiche Ihres WPK-Systems ab — von der
              Dokumentenverwaltung bis zur Audit-Vorbereitung.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m) => (
              <motion.div
                key={m.name}
                variants={fadeInUp}
                className="border rounded-xl p-6 bg-card hover:shadow-md transition-shadow"
              >
                <m.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">{m.name}</h3>
                <p className="text-muted-foreground text-sm">{m.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link
              href="/funktionen"
              className="text-primary hover:underline text-sm font-medium"
            >
              Alle Funktionen im Detail →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// 6. TARGET AUDIENCE
function TargetAudienceSection() {
  const audiences = [
    {
      icon: Wrench,
      role: "Geschäftsführer / Inhaber",
      tasks:
        "EN 1090-Zertifizierung erhalten, Haftungsrisiken minimieren, Audit-Stress reduzieren",
      benefit:
        "Compliance-Score als tägliche Orientierung — ohne Audit-Vorbereitung als Großprojekt.",
    },
    {
      icon: Users,
      role: "Schweißkoordinator (EWE/IWE/SFI)",
      tasks:
        "WPS pflegen, Schweißerzeugnisse verwalten, Audit-Paket zusammenstellen",
      benefit:
        "Alle Aufgaben in einem System — Erinnerungen automatisch, Audit-Paket per Klick.",
    },
    {
      icon: Building2,
      role: "Qualitätsbeauftragter (QMB)",
      tasks:
        "WPK-Dokumentation aktuell halten, Gap-Analyse durchführen, Auditor begleiten",
      benefit:
        "Automatische Gap-Analyse und vollständige Audit-Dokumentation — weniger manuelle Arbeit.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="heading-section">Für wen ist AuditReady?</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((a) => (
              <motion.div
                key={a.role}
                variants={fadeInUp}
                className="bg-card border rounded-xl p-6"
              >
                <a.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">{a.role}</h3>
                <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wide">
                  Typische Aufgaben
                </p>
                <p className="text-sm text-muted-foreground mb-4">{a.tasks}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                  Wie AuditReady hilft
                </p>
                <p className="text-sm font-medium">{a.benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// 7. BETA PRICING
function BetaPricingSection() {
  const tiers = [
    { name: "Starter", price: "79", desc: "1–5 Schweißer, EXC2, 1 Benutzer" },
    {
      name: "Professional",
      price: "149",
      desc: "6–30 Schweißer, EXC2/EXC3, 10 Benutzer",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Auf Anfrage",
      desc: "30+ MA, Mehrstandorte, API",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-4">
            <h2 className="heading-section">Preise</h2>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5">
              BETA: Alle Pläne derzeit kostenlos
            </Badge>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {tiers.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeInUp}
                className={`rounded-xl border p-6 text-center flex flex-col ${t.highlighted ? "border-primary shadow-lg bg-card" : "bg-card"}`}
              >
                {t.highlighted && (
                  <Badge className="self-center mb-3 bg-primary text-primary-foreground">
                    Beliebt
                  </Badge>
                )}
                <h3 className="text-xl font-bold mb-1">{t.name}</h3>
                <div className="line-through text-muted-foreground text-sm mb-1">
                  {t.price !== "Auf Anfrage" ? `${t.price} EUR/Monat` : ""}
                </div>
                <div className="text-2xl font-bold text-primary mb-2">
                  {t.price === "Auf Anfrage" ? "Auf Anfrage" : "BETA: 0 EUR"}
                </div>
                <p className="text-muted-foreground text-sm mb-6 flex-1">
                  {t.desc}
                </p>
                <Button
                  asChild
                  variant={t.highlighted ? "default" : "outline"}
                  className={`w-full ${t.highlighted ? "bg-primary hover:bg-primary/90" : ""}`}
                >
                  <a
                    href={
                      t.name === "Enterprise" ? "/kontakt" : "#beta-anmeldung"
                    }
                  >
                    {t.name === "Enterprise"
                      ? "Demo anfragen"
                      : "Beta-Zugang sichern"}
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
          <motion.p
            variants={fadeInUp}
            className="text-center text-muted-foreground text-sm mt-6"
          >
            Nach der Beta-Phase erhalten alle Beta-Nutzer 30% Rabatt auf das
            erste Jahr.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// 8. TRUST SECTION
function TrustSection() {
  const trust = [
    {
      icon: Cloud,
      title: "Cloud-basiert",
      desc: "Keine Installation, kein IT-Aufwand. Browser genügt.",
    },
    {
      icon: Shield,
      title: "DSGVO-konform",
      desc: "EU-Rechenzentren, tägliche Backups, keine Datenweitergabe.",
    },
    {
      icon: Lock,
      title: "SSL-verschlüsselt",
      desc: "Alle Übertragungen sind TLS-verschlüsselt. Ihre Daten sind sicher.",
    },
    {
      icon: Flag,
      title: "Made in Germany",
      desc: "Entwickelt und betrieben in Deutschland. Deutscher Support.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="heading-section">Technologie & Sicherheit</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trust.map((t) => (
              <motion.div
                key={t.title}
                variants={fadeInUp}
                className="bg-card border rounded-xl p-6 text-center"
              >
                <t.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.title}</h3>
                <p className="text-muted-foreground text-sm">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// 9. BETA FORM
function BetaRegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BetaFormData>({
    resolver: zodResolver(betaSchema),
  });

  const onSubmit = async (data: BetaFormData) => {
    setLoading(true);
    try {
      await fetch("/api/beta-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="beta-anmeldung"
      className="py-16 md:py-24 bg-gradient-to-b from-primary/5"
    >
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="heading-section">Jetzt Beta-Zugang sichern</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Frühzeitiger Zugang, direkter Einfluss auf Features und 30% Rabatt
              nach Beta-Ende — für alle, die jetzt dabei sind.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto items-start">
            {/* Incentive Liste */}
            <motion.div variants={fadeInUp}>
              <h3 className="font-semibold text-lg mb-6">Beta-Vorteile</h3>
              <ul className="space-y-4">
                {[
                  "Kostenloser Zugang während der gesamten Beta-Phase",
                  "Direkte Feature-Wünsche — Sie prägen das Produkt",
                  "Bevorzugter Support durch unser Entwicklungsteam",
                  "30% Rabatt auf das erste Jahr nach Beta-Ende",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Formular */}
            <motion.div
              variants={fadeInUp}
              className="bg-card border rounded-2xl p-8"
            >
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Anmeldung erfolgreich!
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Wir melden uns innerhalb von 24 Stunden mit Ihrem
                    Beta-Zugang.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Label htmlFor="beta-company">Unternehmen *</Label>
                    <Input
                      id="beta-company"
                      {...register("company")}
                      className="mt-1.5"
                      placeholder="Muster Metallbau GmbH"
                    />
                    {errors.company && (
                      <p className="text-destructive text-xs mt-1">
                        {errors.company.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="beta-name">Name *</Label>
                    <Input
                      id="beta-name"
                      {...register("name")}
                      className="mt-1.5"
                      placeholder="Max Mustermann"
                    />
                    {errors.name && (
                      <p className="text-destructive text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="beta-email">E-Mail *</Label>
                    <Input
                      id="beta-email"
                      type="email"
                      {...register("email")}
                      className="mt-1.5"
                      placeholder="max@metallbau.de"
                    />
                    {errors.email && (
                      <p className="text-destructive text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary/90 h-11"
                  >
                    {loading ? "Wird gesendet..." : "Kostenlos registrieren"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Mit der Registrierung stimmen Sie unserer{" "}
                    <Link href="/datenschutz" className="underline">
                      Datenschutzerklärung
                    </Link>{" "}
                    zu. Keine Kreditkarte nötig.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// 10. CROSS-LINKS
function CrossLinksSection() {
  const links = [
    { label: "Schlosserei & Metallbau", href: "/schlosserei-metallbau" },
    { label: "Stahlbau-Mittelstand", href: "/stahlbau-mittelstand" },
    { label: "Treppenbau & Geländerbau", href: "/treppenbau-gelaenderbau" },
    { label: "Aluminium & Fassadenbau", href: "/aluminium-fassadenbau" },
    { label: "DIN EN 1090-1 erklärt", href: "/wissen/din-en-1090-1" },
    { label: "WPK-Handbuch", href: "/wissen/wpk-handbuch" },
    { label: "Ausführungsklassen EXC", href: "/wissen/ausfuehrungsklassen" },
    {
      label: "Audit-Bereitschafts-Check",
      href: "/tools/audit-bereitschafts-check",
    },
  ];

  return (
    <section className="py-12 bg-muted/20">
      <div className="container-custom">
        <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-wide">
          Mehr von AuditReady
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-center px-4 py-3 rounded-lg border bg-card hover:bg-primary/5 hover:border-primary/30 transition-colors text-sm"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// 11. FINAL CTA
function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container-custom text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={fadeInUp} className="heading-section mb-4">
            Starten Sie jetzt — kostenlos und unverbindlich
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto"
          >
            AuditReady einrichten dauert weniger als 2 Stunden. Ihr nächstes
            Überwachungsaudit könnte früher kommen als erwartet.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 h-12 px-8"
              asChild
            >
              <a href="#beta-anmeldung">
                Beta-Zugang sichern
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// MAIN EXPORT
export function SoftwareLandingPage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <QuoteBanner />
      <ModulesSection />
      <TargetAudienceSection />
      <BetaPricingSection />
      <TrustSection />
      <BetaRegistrationForm />
      <CrossLinksSection />
      <FinalCTA />
    </>
  );
}
