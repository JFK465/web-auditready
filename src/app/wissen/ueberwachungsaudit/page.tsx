import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Das EN 1090-Überwachungsaudit: Ablauf, Prüfpunkte und Vorbereitung",
  description:
    "Wie läuft das EN 1090-Überwachungsaudit ab? Was prüft die Zertifizierungsstelle? Konkrete Vorbereitung und häufige Mängel erklärt.",
  alternates: { canonical: `${siteConfig.url}/wissen/überwachungsaudit` },
  openGraph: {
    title: "Das EN 1090-Überwachungsaudit: Ablauf, Prüfpunkte und Vorbereitung",
    description:
      "Vollständiger Leitfaden zum EN 1090-Überwachungsaudit — was geprüft wird, häufige Mängel und 4-Wochen-Checkliste.",
    url: `${siteConfig.url}/wissen/überwachungsaudit`,
  },
};

const prüfpunkte = [
  {
    nr: "1",
    title: "WPK-Handbuch",
    detail:
      "Ist das Handbuch vollständig, aktuell und entspricht es EN 1090-1 Abschnitt 6?",
  },
  {
    nr: "2",
    title: "Schweisskoordinator",
    detail:
      "Ist eine qualifizierte Schweissaufsicht nach ISO 14731 dokumentiert und anwesend?",
  },
  {
    nr: "3",
    title: "Schweisserzeugnisse",
    detail:
      "Sind alle ISO 9606-1 Schweisserzeugnisse gültig (nicht abgelaufen)?",
  },
  {
    nr: "4",
    title: "WPS-Abdeckung",
    detail:
      "Decken aktuelle WPS und WPQR alle eingesetzten Verfahren, Werkstoffe und Positionen ab?",
  },
  {
    nr: "5",
    title: "Materialnachweise",
    detail:
      "Sind EN 10204 Typ 3.1 Zeugnisse für alle tragenden Werkstoffe archiviert?",
  },
  {
    nr: "6",
    title: "ZfP-Dokumentation",
    detail:
      "Sind Prüfplanung und Prüfergebnisse (VT, MT, UT, RT) vollständig dokumentiert?",
  },
  {
    nr: "7",
    title: "Ausrüstungsnachweise",
    detail:
      "Kalibrierung und Wartung der Schweissanlagen — aktuell und dokumentiert?",
  },
  {
    nr: "8",
    title: "Änderungsprotokoll",
    detail:
      "Wurden wesentliche Änderungen im WPK-System protokolliert und an die notifizierte Stelle gemeldet?",
  },
];

const vierWochenCheckliste = [
  "WPK-Handbuch prüfen: Ist alles aktuell? Schweisskoordinator, Schweisser, WPS-Liste",
  "Alle ISO 9606-1 Zeugnisse kontrollieren: Gibt es abgelaufene?",
  "WPS-Abdeckungscheck: Decken WPQR alle aktuell verwendeten Verfahren ab?",
  "Materialnachweise-Archiv prüfen: Sind alle 3.1-Zeugnisse der letzten 12 Monate auffindbar?",
  "ZfP-Unterlagen zusammenstellen: Sichtprüfungs- und NDT-Protokolle der letzten Aufträge",
  "Ausrüstungskalibrierung prüfen: Kalibrierungsintervalle der Schweissanlagen eingehalten?",
  "Etwaige Änderungen aus dem letzten Jahr dokumentieren und Meldepflicht prüfen",
  "Audit-Paket vorbereiten: Alle Dokumente in strukturierter Reihenfolge bereitstellen",
];

export default function ÜberwachungsauditPage() {
  return (
    <>
      <WebPageSchema
        title="Das EN 1090-Überwachungsaudit: Ablauf, Prüfpunkte und Vorbereitung"
        description="Leitfaden zum EN 1090-Überwachungsaudit — Ablauf, Prüfpunkte, häufige Mängel und Vorbereitung."
        url="/wissen/überwachungsaudit"
      />
      <BreadcrumbSchema
        items={[
          { label: "Wissen", href: "/wissen" },
          { label: "Überwachungsaudit", href: "/wissen/überwachungsaudit" },
        ]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            { label: "Wissen", href: "/wissen" },
            { label: "Überwachungsaudit", href: "/wissen/überwachungsaudit" },
          ]}
        />
      </div>

      <article className="py-16">
        <div className="container-custom max-w-3xl">
          <div className="mb-10">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium text-xs">
                Audit
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> 10 Minuten Lesezeit
              </span>
            </div>
            <h1 className="heading-hero mb-4">
              Das EN 1090-Überwachungsaudit: Ablauf, Prüfpunkte und Vorbereitung
            </h1>
            <p className="text-xl text-muted-foreground">
              Das jährliche Überwachungsaudit entscheidet über den Fortbestand
              Ihrer EN 1090-Zertifizierung. Wer weiss, was geprüft wird, kann
              sich gezielt vorbereiten — und teure Nachaudits vermeiden.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">
                1. Was ist das Überwachungsaudit und wann findet es statt?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Das Überwachungsaudit (auch: Surveillance Audit,
                Wiederholungsaudit) ist eine jährliche Prüfung Ihres WPK-Systems
                durch die notifizierte Stelle. Es ist Bestandteil des
                Konformitätsnachweisverfahrens System 2+ nach EN 1090-1 und
                zwingend für den Fortbestand der CE-Kennzeichnung.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Üblich ist eine Ankündigungsfrist von 2-4 Wochen. Manche
                Zertifizierungsstellen führen auch unangekündigte Audits durch —
                vor allem nach vorangegangenen Mängeln.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                2. Welche Zertifizierungsstellen führen Überwachungsaudits
                durch?
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "TÜV SÜD",
                  "TÜV Rheinland",
                  "DNV",
                  "SLV",
                  "Metall-Zert",
                  "ZDH-Zert",
                ].map((stelle) => (
                  <div
                    key={stelle}
                    className="bg-muted/30 border border-border rounded-lg px-4 py-3 text-sm font-medium text-center"
                  >
                    {stelle}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. Die 8 Hauptprüfpunkte des Überwachungsaudits
              </h2>
              <div className="space-y-3">
                {prüfpunkte.map((p) => (
                  <div
                    key={p.nr}
                    className="bg-muted/30 rounded-lg p-4 border border-border"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center flex-shrink-0">
                        {p.nr}
                      </span>
                      <div>
                        <div className="font-semibold mb-1">{p.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {p.detail}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. Die häufigsten Mangelbefunde
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Basierend auf öffentlichen Informationen von
                Zertifizierungsstellen sind die häufigsten Mängel bei EN
                1090-Überwachungsaudits:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
                <li>
                  Abgelaufene ISO 9606-1 Schweisserzeugnisse (häufigster Befund)
                </li>
                <li>
                  WPK-Handbuch nicht aktualisiert (z.B. nach Personalwechsel)
                </li>
                <li>
                  WPS-Lücken: Eingesetzte Verfahren ohne gültige WPQR-Deckung
                </li>
                <li>
                  Fehlende oder unvollständige Materialnachweise (EN 10204)
                </li>
                <li>
                  ZfP-Dokumentation unvollständig oder nicht nachvollziehbar
                </li>
                <li>Ausrüstungskalibrierung überfällig</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                5. Nachaudit: Was passiert bei Mängeln?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Mängel werden nach Schweregrad kategorisiert. Minor-Mängel
                müssen innerhalb einer gesetzten Frist korrigiert und
                nachgewiesen werden. Bei Major-Mängeln (z.B. fehlende
                Schweissaufsicht) wird ein Nachaudit angesetzt. Im schlimmsten
                Fall — bei mehreren oder kritischen Mängeln — kann das
                Zertifikat ausgesetzt werden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                6. Checkliste: 4 Wochen vor dem Audit
              </h2>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  4-Wochen-Vorbereitung
                </h3>
                <div className="space-y-3">
                  {vierWochenCheckliste.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 rounded border-2 border-primary/40 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                7. Wie AuditReady die Audit-Vorbereitung automatisiert
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                AuditReady hält das WPK-System ganzjährig aktuell — und
                generiert das vollständige Audit-Paket auf Knopfdruck. Statt
                wochenlanger manueller Vorbereitung: Ein Klick, druckfertiges
                Paket, bereit für TÜV, DNV, SLV oder Metall-Zert. Die
                Gap-Analyse zeigt kontinuierlich, wo Handlungsbedarf besteht —
                lange vor dem Audit.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <Link href="/wpk-software#beta-anmeldung">
                    Audit-Vorbereitung automatisieren — kostenlos testen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/tools/audit-bereitschafts-check">
                    Audit-Bereitschaft jetzt prüfen
                  </Link>
                </Button>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-semibold mb-4">Weiterführende Ressourcen</h3>
            <div className="flex flex-wrap gap-3">
              {[
                {
                  label: "Kostenloser Audit-Check",
                  href: "/tools/audit-bereitschafts-check",
                },
                {
                  label: "WPK-Handbuch Leitfaden",
                  href: "/wissen/wpk-handbuch",
                },
                {
                  label: "Ausführungsklassen EXC",
                  href: "/wissen/ausführungsklassen",
                },
                { label: "WPK Software testen", href: "/wpk-software" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary border border-primary/30 px-3 py-1.5 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
