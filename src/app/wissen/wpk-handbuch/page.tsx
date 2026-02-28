import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "WPK-Handbuch nach EN 1090: Inhalt, Aufbau und Pflege erklärt",
  description:
    "Was muss im WPK-Handbuch nach EN 1090-1 stehen? Pflichtinhalte, Kapitelstruktur und Tipps zur laufenden Aktualisierung. Mit kostenloser Checkliste.",
  alternates: { canonical: `${siteConfig.url}/wissen/wpk-handbuch` },
  openGraph: {
    title: "WPK-Handbuch nach EN 1090: Inhalt, Aufbau und Pflege erklärt",
    description:
      "Vollständiger Leitfaden zum WPK-Handbuch nach EN 1090-1: Pflichtkapitel, Struktur, Verantwortlichkeiten und Digitalisierung.",
    url: `${siteConfig.url}/wissen/wpk-handbuch`,
  },
};

const pflichtkapitel = [
  {
    nr: "Kap. 1",
    title: "Allgemeines",
    content:
      "Betriebsbeschreibung, Anwendungsbereich der EN 1090-Zertifizierung, Ausführungsklasse",
  },
  {
    nr: "Kap. 2",
    title: "Personal",
    content:
      "Schweisskoordinator (Name, Qualifikation nach ISO 14731), Schweisser (ISO 9606-1 Zeugnisse), ZfP-Personal",
  },
  {
    nr: "Kap. 3",
    title: "Schweissverfahren / WPS",
    content:
      "Liste aller eingesetzten Schweissverfahren, Verweis auf WPQR-Grundlagen, aktuelle WPS-Dokumentation",
  },
  {
    nr: "Kap. 4",
    title: "Prüfplanung und ZfP",
    content:
      "Prüfumfang nach Ausführungsklasse, Prüfmethoden (VT, MT, UT, RT), Aufzeichnung der Prüfergebnisse",
  },
  {
    nr: "Kap. 5",
    title: "Ausrüstung und Instandhaltung",
    content:
      "Liste der Schweissanlagen und Hilfsmittel, Kalibrierungsintervalle, Wartungsnachweise",
  },
  {
    nr: "Kap. 6",
    title: "Eingangskontrolle",
    content:
      "Prüfung von Materialzeugnissen (EN 10204), Wareneingangskontrolle, Nachverfolgung",
  },
];

export default function WpkHandbuchPage() {
  return (
    <>
      <WebPageSchema
        title="WPK-Handbuch nach EN 1090: Inhalt, Aufbau und Pflege erklärt"
        description="Leitfaden zum WPK-Handbuch nach EN 1090-1 für Metallbau-Betriebe."
        url="/wissen/wpk-handbuch"
      />
      <BreadcrumbSchema
        items={[
          { label: "Wissen", href: "/wissen" },
          { label: "WPK-Handbuch", href: "/wissen/wpk-handbuch" },
        ]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            { label: "Wissen", href: "/wissen" },
            { label: "WPK-Handbuch", href: "/wissen/wpk-handbuch" },
          ]}
        />
      </div>

      <article className="py-16">
        <div className="container-custom max-w-3xl">
          <div className="mb-10">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium text-xs">
                Dokumentation
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> 9 Minuten Lesezeit
              </span>
            </div>
            <h1 className="heading-hero mb-4">
              WPK-Handbuch nach EN 1090: Inhalt, Aufbau und Pflege
            </h1>
            <p className="text-xl text-muted-foreground">
              Das WPK-Handbuch ist das Herzstück der EN 1090-Zertifizierung.
              Dieser Leitfaden zeigt, was rein muss, wie es aufgebaut ist — und
              wie man es aktuell hält.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">
                1. Was ist das WPK-Handbuch und warum ist es Pflicht?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Das WPK-Handbuch (Handbuch der werkseigenen
                Produktionskontrolle) ist das zentrale Dokument des WPK-Systems
                nach EN 1090-1. Es beschreibt, wie ein Betrieb seine
                Fertigungsprozesse, sein Personal und seine Prüfungen
                organisiert, um die Anforderungen der EN 1090-Norm dauerhaft zu
                erfüllen.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Das Handbuch ist Pflicht, weil die notifizierte Stelle (TÜV,
                DNV, Metall-Zert) beim Überwachungsaudit prüft, ob alle
                relevanten Bereiche dokumentiert sind. Fehlendes oder veraltetes
                Handbuch ist der häufigste Audit-Mangelbefund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                2. Die Pflichtkapitel nach EN 1090-1 Abschnitt 6
              </h2>
              <div className="space-y-4">
                {pflichtkapitel.map((kap) => (
                  <div
                    key={kap.nr}
                    className="bg-muted/30 rounded-lg p-4 border border-border"
                  >
                    <div className="flex items-start gap-3">
                      <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded flex-shrink-0">
                        {kap.nr}
                      </span>
                      <div>
                        <div className="font-semibold mb-1">{kap.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {kap.content}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. Schweissverfahren und WPS — Dokumentation im WPK
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Das WPK-Handbuch muss alle eingesetzten Schweissverfahren listen
                und auf die entsprechenden WPS (Welding Procedure
                Specifications) verweisen. Jede WPS muss auf einer anerkannten
                WPQR-Grundlage basieren (Schweissverfahrensprüfung nach ISO
                15614-1 oder gleichwertig). Die WPS selbst werden als Anhang zum
                Handbuch geführt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. Personalqualifikation im WPK
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Das Handbuch muss für jeden Schweisser das aktuelle ISO 9606-1
                Zeugnis mit Ablaufdatum dokumentieren. Für den
                Schweisskoordinator: Name, Qualifikationsnachweis nach ISO 14731
                (EWS, IWE etc.) und Funktionsbeschreibung. Bei ZfP-Personal
                zusätzlich die Zertifizierung nach ISO 9712.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                5. WPK-Handbuch aktuell halten: Wer ist verantwortlich?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Verantwortlich für die Aktualität ist der Schweisskoordinator
                oder eine explizit benannte Person im WPK-Handbuch. Das Handbuch
                muss bei jeder relevanten Änderung aktualisiert werden:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
                <li>Neuer Schweisser oder Schweisskoordinator im Betrieb</li>
                <li>Neues Schweissverfahren oder neue Werkstoffgruppe</li>
                <li>Änderung der Ausführungsklasse</li>
                <li>Neue oder veränderte Prüfanforderungen</li>
                <li>Änderungen in der Aufbauorganisation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                6. Von Word zur digitalen WPK: Schritt-für-Schritt
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Die Digitalisierung des WPK-Handbuchs ermöglicht automatische
                Ablaufwarnungen, zentralen Zugriff für alle Beteiligten und
                schnelle Audit-Paketvorbereitung. Der Migrationspfad:
              </p>
              <div className="mt-4 space-y-3">
                {[
                  "1. Bestandsaufnahme: Was liegt vor? (Word, PDF, Excel, Papier)",
                  "2. Dateneingabe: Schweisserzeugnisse, WPS, Materialnachweise einpflegen",
                  "3. Handbuch-Struktur digital abbilden: Kapitel 1-6 nach EN 1090-1",
                  "4. Ablaufdaten hinterlegen und Erinnerungen aktivieren",
                  "5. Compliance-Check: Ist alles vollständig nach Ausführungsklasse?",
                ].map((step) => (
                  <div key={step} className="flex items-start gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                7. Wie AuditReady das WPK-Handbuch digitalisiert
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                AuditReady bildet alle Pflichtkapitel des WPK-Handbuchs als
                strukturierte Datenbank ab. Beim Import eines bestehenden
                Word-Handbuchs werden die relevanten Daten in das WPK-Cockpit
                übernommen. Ablaufdaten werden automatisch überwacht, Lücken
                werden in der Gap-Analyse angezeigt, und das komplette
                Audit-Paket kann per Klick generiert werden.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <Link href="/wpk-software#beta-anmeldung">
                    WPK-Handbuch digitalisieren — kostenlos testen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/tools/audit-bereitschafts-check">
                    Compliance-Check starten
                  </Link>
                </Button>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-semibold mb-4">Weiterführende Artikel</h3>
            <div className="flex flex-wrap gap-3">
              {[
                {
                  label: "DIN EN 1090-1 Grundlagen",
                  href: "/wissen/din-en-1090-1",
                },
                {
                  label: "Schweisskoordinator ISO 14731",
                  href: "/wissen/schweisskoordinator",
                },
                {
                  label: "Compliance-Check Tool",
                  href: "/tools/audit-bereitschafts-check",
                },
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
