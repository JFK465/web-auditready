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
  title: "DIN EN 1090-1 erklärt: WPK, CE-Kennzeichnung und Anforderungen",
  description:
    "Was ist DIN EN 1090-1? Erklärung der Norm, der WPK-Anforderungen und der CE-Kennzeichnung für Stahlbauteile. Praxisguide für Metallbau-Betriebe.",
  alternates: { canonical: `${siteConfig.url}/wissen/din-en-1090-1` },
  openGraph: {
    title: "DIN EN 1090-1 erklärt: WPK, CE-Kennzeichnung und Anforderungen",
    description:
      "Praxisguide zu DIN EN 1090-1 für Metallbau-Betriebe: WPK-Anforderungen, CE-Kennzeichnung, Konformitätsnachweisverfahren.",
    url: `${siteConfig.url}/wissen/din-en-1090-1`,
  },
};

export default function DinEn10901Page() {
  return (
    <>
      <WebPageSchema
        title="DIN EN 1090-1 erklärt: WPK, CE-Kennzeichnung und Anforderungen"
        description="Praxisguide zu DIN EN 1090-1 für Metallbau-Betriebe."
        url="/wissen/din-en-1090-1"
      />
      <BreadcrumbSchema
        items={[
          { label: "Wissen", href: "/wissen" },
          { label: "DIN EN 1090-1", href: "/wissen/din-en-1090-1" },
        ]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            { label: "Wissen", href: "/wissen" },
            { label: "DIN EN 1090-1", href: "/wissen/din-en-1090-1" },
          ]}
        />
      </div>

      <article className="py-16">
        <div className="container-custom max-w-3xl">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium text-xs">
                Grundlagen
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> 8 Minuten Lesezeit
              </span>
            </div>
            <h1 className="heading-hero mb-4">
              DIN EN 1090-1 erklärt: WPK, CE-Kennzeichnung und Anforderungen
            </h1>
            <p className="text-xl text-muted-foreground">
              DIN EN 1090-1 ist die Grundlage für alle EN 1090-zertifizierten
              Metallbau-Betriebe in Deutschland. Dieser Leitfaden erklärt die
              Norm praxisnah — ohne Normsprache.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">
                1. Was regelt DIN EN 1090-1?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                DIN EN 1090-1 ist die harmonisierte europäische Norm für die
                &quot;Ausführung von Stahltragwerken und Aluminiumtragwerken —
                Teil 1: Konformitätsnachweisverfahren für Tragwerksteile.&quot;
                Sie regelt, wie Hersteller von tragenden Stahlbauteilen
                nachweisen müssen, dass ihre Produkte den grundlegenden
                Anforderungen der Bauproduktenverordnung (BauPVO) entsprechen.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Kurz gesagt: EN 1090-1 definiert den Rahmen für die
                CE-Kennzeichnung tragender Metallbauteile. Wer tragende
                Stahlbauteile für den europäischen Markt herstellt und
                CE-kennzeichnen möchte, muss EN 1090-1 einhalten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                2. Wer ist betroffen? (Anwendungsbereich)
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                EN 1090-1 gilt für Hersteller von Stahl- und
                Aluminiumkonstruktionen, die als Tragwerksteile in Bauwerken
                verwendet werden. Typische betroffene Betriebe:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
                <li>
                  Schlossereien und Metallbau-Betriebe mit Tragwerksaufgaben
                </li>
                <li>
                  Stahlbau-Unternehmen (Hallenkonstruktionen, Brücken, Masten)
                </li>
                <li>Treppenbauer und Geländerhersteller (sofern tragend)</li>
                <li>Fassadenbauer mit Aluminiumkonstruktionen (EN 1090-3)</li>
                <li>Subunternehmer im Stahlbau</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. Das WPK-System: Herzstück der EN 1090-1
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Das Herzstück von EN 1090-1 ist die werkseigene
                Produktionskontrolle (WPK). Das WPK-System ist ein
                dokumentiertes Qualitätsmanagementsystem, das intern im Betrieb
                eingerichtet und kontinuierlich aufrechterhalten wird.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Das WPK-System umfasst nach EN 1090-1 Abschnitt 6 mindestens:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
                <li>
                  Dokumentation der Fertigungsverfahren (WPS nach ISO 15609-1)
                </li>
                <li>
                  Personalqualifikationsnachweise (Schweisskoordinator,
                  Schweisser)
                </li>
                <li>
                  Prüfplanung und Ergebnisse der zerstörungsfreien Prüfung (ZfP)
                </li>
                <li>Ausrüstungs- und Instandhaltungsnachweise</li>
                <li>Eingangskontrolle von Materialien und Halbzeugen</li>
                <li>Behandlung nicht konformer Produkte</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. Erstprüfung und Erstbemusterung nach EN 1090-1
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Vor der ersten CE-Kennzeichnung muss der Hersteller eine
                Erstprüfung (ITT — Initial Type Testing) durchführen. Bei
                Tragwerksteilen aus Stahl oder Aluminium beinhaltet dies die
                Erstellung und Validierung der WPS (Schweissverfahrensprüfung
                nach ISO 15614-1 oder gleichwertig).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                5. CE-Kennzeichnung: Was muss auf dem Schild stehen?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Das CE-Kennzeichen auf Tragwerksteilen nach EN 1090-1 muss
                mindestens enthalten:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
                <li>CE-Symbol + Kennnummer der notifizierten Stelle</li>
                <li>Name und eingetragene Adresse des Herstellers</li>
                <li>Jahr der Anbringung</li>
                <li>Nummer der Leistungserklärung (DoP)</li>
                <li>Ausführungsklasse (EXC1, EXC2, EXC3 oder EXC4)</li>
                <li>Bezugsnorm: EN 1090-1</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                6. Das Konformitätsnachweisverfahren (System 2+)
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Für Tragwerksteile aus Stahl gilt das
                Konformitätsnachweisverfahren <strong>System 2+</strong>. Das
                bedeutet:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
                <li>Der Hersteller führt die ITT (Erstprüfung) selbst durch</li>
                <li>
                  Eine notifizierte Stelle (z.B. TÜV, DNV, Metall-Zert)
                  zertifiziert das WPK-System
                </li>
                <li>
                  Jährliche Überwachungsaudits durch die notifizierte Stelle
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                7. Wichtige Fristen und Zertifizierungsintervalle
              </h2>
              <div className="bg-muted/50 rounded-xl p-6 border border-border">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {[
                    [
                      "Überwachungsaudit-Frequenz",
                      "Jährlich (min. 1x pro Jahr)",
                    ],
                    [
                      "Schweisserzeugnisse (ISO 9606-1)",
                      "Gültig 2 Jahre (Verlängerung möglich)",
                    ],
                    [
                      "WPK-Handbuch-Revision",
                      "Bei Änderungen, min. jährliche Prüfung",
                    ],
                    [
                      "Zertifikat-Gültigkeit",
                      "Unbegrenzt bei erfolgreichen Audits",
                    ],
                  ].map(([label, value]) => (
                    <div key={label} className="border-b border-border pb-2">
                      <div className="font-medium text-foreground">{label}</div>
                      <div className="text-muted-foreground">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                8. Wie AuditReady bei DIN EN 1090-1 unterstützt
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                AuditReady bildet alle Pflichtinhalte des EN 1090-1-WPK-Systems
                digital ab. Das WPK-Cockpit zeigt auf einen Blick, welche
                Anforderungen erfüllt sind — und wo Handlungsbedarf besteht. Der
                Compliance-Score gibt den Erfüllungsgrad in Prozent an.
              </p>
              <div className="mt-6">
                <Button asChild>
                  <Link href="/wpk-software#beta-anmeldung">
                    WPK-System digitalisieren — kostenlos testen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>
          </div>

          {/* Internal Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-semibold mb-4">Weiterführende Artikel</h3>
            <div className="flex flex-wrap gap-3">
              {[
                {
                  label: "WPK-Handbuch Leitfaden",
                  href: "/wissen/wpk-handbuch",
                },
                {
                  label: "Ausführungsklassen EXC1-EXC4",
                  href: "/wissen/ausfuehrungsklassen",
                },
                {
                  label: "Überwachungsaudit verstehen",
                  href: "/wissen/ueberwachungsaudit",
                },
                {
                  label: "Kostenloser Compliance-Check",
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
