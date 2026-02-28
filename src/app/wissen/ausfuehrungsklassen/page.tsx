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
  title: "Ausführungsklassen EXC1 bis EXC4 nach EN 1090-2 erklärt",
  description:
    "EXC1, EXC2, EXC3 oder EXC4 — welche Ausführungsklasse gilt für Ihren Betrieb? Anforderungen, Unterschiede und praktische Konsequenzen erklärt.",
  alternates: { canonical: `${siteConfig.url}/wissen/ausfuehrungsklassen` },
  openGraph: {
    title: "Ausführungsklassen EXC1 bis EXC4 nach EN 1090-2 erklärt",
    description:
      "Vollständiger Leitfaden zu Ausführungsklassen EXC1-EXC4 nach EN 1090-2: Anforderungen, NDT-Quoten, WPS und Personalqualifikation.",
    url: `${siteConfig.url}/wissen/ausfuehrungsklassen`,
  },
};

export default function AusfuehrungsklassenPage() {
  return (
    <>
      <WebPageSchema
        title="Ausführungsklassen EXC1 bis EXC4 nach EN 1090-2 erklärt"
        description="Leitfaden zu Ausführungsklassen EXC1-EXC4 nach EN 1090-2 für Metallbau-Betriebe."
        url="/wissen/ausfuehrungsklassen"
      />
      <BreadcrumbSchema
        items={[
          { label: "Wissen", href: "/wissen" },
          { label: "Ausführungsklassen", href: "/wissen/ausfuehrungsklassen" },
        ]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            { label: "Wissen", href: "/wissen" },
            {
              label: "Ausführungsklassen",
              href: "/wissen/ausfuehrungsklassen",
            },
          ]}
        />
      </div>

      <article className="py-16">
        <div className="container-custom max-w-3xl">
          <div className="mb-10">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium text-xs">
                Grundlagen
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> 7 Minuten Lesezeit
              </span>
            </div>
            <h1 className="heading-hero mb-4">
              Ausführungsklassen EXC1 bis EXC4 nach EN 1090-2
            </h1>
            <p className="text-xl text-muted-foreground">
              Die Ausführungsklasse bestimmt, welche Anforderungen an
              Dokumentation, NDT und Personalqualifikation gelten. Dieser
              Leitfaden erklärt alle vier Klassen praxisnah.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">
                1. Was sind Ausführungsklassen?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ausführungsklassen (EXC = Execution Class) nach EN 1090-2
                definieren das Anforderungsniveau für die Herstellung von
                Stahltragwerken. Je höher die Ausführungsklasse, desto strenger
                sind die Dokumentations-, Qualifikations- und Prüfanforderungen.
                Die Klasse wird vom Tragwerksplaner oder Auftraggeber vorgegeben
                und muss im WPK-System berücksichtigt werden.
              </p>
            </section>

            {/* EXC Overview Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-xl border border-border overflow-hidden text-sm">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="text-left p-3 font-semibold">Klasse</th>
                    <th className="text-left p-3 font-semibold">
                      Konsequenzklasse
                    </th>
                    <th className="text-left p-3 font-semibold">
                      NDT Stumpfnähte
                    </th>
                    <th className="text-left p-3 font-semibold">
                      Schweisskoordinator
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "EXC1",
                      "CC1 (gering)",
                      "Nur Sichtprüfung",
                      "Nicht zwingend",
                    ],
                    ["EXC2", "CC2 (mittel)", "5–10 %", "SFI / EWS"],
                    ["EXC3", "CC3 (hoch)", "10–20 %", "IWE / EWT"],
                    ["EXC4", "CC4 (extrem)", "Bis 100 %", "IWE (Vollzeit)"],
                  ].map(([exc, cc, ndt, sk]) => (
                    <tr key={exc} className="border-t border-border">
                      <td className="p-3 font-medium text-primary">{exc}</td>
                      <td className="p-3 text-muted-foreground">{cc}</td>
                      <td className="p-3 text-muted-foreground">{ndt}</td>
                      <td className="p-3 text-muted-foreground">{sk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                2. EXC1 — Geringe Konsequenz
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                EXC1 gilt für Tragwerke mit geringer Konsequenz bei Versagen,
                wie einfache Nebenbauten. Die Anforderungen sind minimal:
                Sichtprüfung der Schweissnähte reicht, kein dedizierter
                Schweisskoordinator erforderlich. In der Praxis kommt EXC1
                selten vor.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. EXC2 — Mittlere Konsequenz: Der Standard für die meisten
                Metallbauer
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                EXC2 ist die häufigste Ausführungsklasse im deutschen Metallbau
                — anwendbar für normale Gebäude, Brücken mit geringem Verkehr
                und übliche Stahlbaukonstruktionen. Anforderungen:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
                <li>
                  Qualifizierter Schweisskoordinator (SFI, EWS oder höher)
                </li>
                <li>
                  5–10 % NDT-Prüfung bei Stumpfnähten (zusätzlich zur
                  Sichtprüfung)
                </li>
                <li>
                  Vollständige WPS für alle eingesetzten Schweissverfahren
                </li>
                <li>ISO 9606-1 Schweisserzeugnisse für alle Schweisser</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. EXC3 — Hohe Konsequenz: Erweiterte Dokumentation und NDT
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                EXC3 gilt für wichtige Gebäude, Brücken mit hohem
                Verkehrsaufkommen und tragende Konstruktionen mit hohem
                Versagensrisiko. Zusätzlich zu EXC2:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
                <li>
                  Schweisskoordinator: IWE oder EWT (höhere Qualifikation
                  erforderlich)
                </li>
                <li>10–20 % NDT-Prüfung bei Stumpfnähten</li>
                <li>Strengere WPS-Abdeckungsanforderungen</li>
                <li>Vollständiges Änderungsprotokoll aller WPK-Dokumente</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                5. EXC4 — Extreme Konsequenz: Vollständige Rückverfolgbarkeit
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                EXC4 ist die höchste Klasse und gilt für sicherheitskritische
                Konstruktionen. Sie erfordert 100 % NDT-Prüfung, vollständige
                Rückverfolgbarkeit aller Materialien und Schweissnähte sowie
                einen IWE-qualifizierten Schweisskoordinator in Vollzeit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                6. Wie wird die Ausführungsklasse festgelegt?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Die Ausführungsklasse wird nach EN 1990 Anhang B anhand von
                Konsequenzklasse (CC), Produktionssteuerung und Belastungsart
                bestimmt. Sie wird vom Tragwerksplaner im Ausführungsplan
                angegeben und muss vom Metallbauer im Auftragsformular
                dokumentiert werden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                7. Ausführungsklasse und WPK: Was ändert sich?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Das WPK-System muss auf die höchste Ausführungsklasse
                ausgerichtet sein, die ein Betrieb regelmässig ausführt. Wenn
                ein Betrieb sowohl EXC2- als auch EXC3-Aufträge annimmt, muss
                das WPK-System EXC3-Anforderungen erfüllen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                8. Wie AuditReady je nach Ausführungsklasse unterstützt
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Beim Einrichten von AuditReady wählen Sie Ihre
                Ausführungsklasse. Das System passt automatisch an: Gap-Analyse
                prüft EXC2 oder EXC3-Anforderungen, NDT-Planungsvorgaben werden
                entsprechend angezeigt, und der Compliance-Score bewertet nach
                den class-spezifischen Pflichten.
              </p>
              <div className="mt-6">
                <Button asChild>
                  <Link href="/wpk-software#beta-anmeldung">
                    AuditReady für meine Ausführungsklasse testen
                    <ArrowRight className="ml-2 h-4 w-4" />
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
                  label: "Überwachungsaudit",
                  href: "/wissen/ueberwachungsaudit",
                },
                {
                  label: "Für Schlossereien (EXC2)",
                  href: "/schlosserei-metallbau",
                },
                { label: "Für Stahlbau EXC3", href: "/stahlbau-mittelstand" },
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
