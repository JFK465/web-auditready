import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import {
  BreadcrumbSchema,
  WebPageSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Shield,
  FileSearch,
  FileDown,
  BarChart3,
  ChevronDown,
  ArrowRight,
  Network,
} from "lucide-react";

export const metadata: Metadata = {
  title: "EN 1090 WPK Software für Stahlbau-Unternehmen – AuditReady",
  description:
    "AuditReady für Stahlbau-Betriebe mit 30-100 Mitarbeitern: Compliance-Score, Gap-Analyse für EXC2/EXC3 und automatisierte Audit-Pakete für TÜV und DNV.",
  alternates: { canonical: `${siteConfig.url}/stahlbau-mittelstand` },
  openGraph: {
    title: "EN 1090 WPK Software für Stahlbau-Unternehmen – AuditReady",
    description:
      "Compliance-Score und Audit-Paket für EXC2 und EXC3 Stahlbau-Betriebe mit mehreren Schweisskoordinatoren.",
    url: `${siteConfig.url}/stahlbau-mittelstand`,
  },
};

const challenges = [
  {
    icon: Users,
    title: "Viele Schweisserzeugnisse, viele Ablaufdaten",
    description:
      "Bei 15-30 Schweissern mit je 2-4 ISO 9606-1-Qualifikationen entsteht ein Pflege-Aufwand, der in Excel schnell ausser Kontrolle gerät.",
  },
  {
    icon: Shield,
    title: "EXC3-Anforderungen erfordern intensivere Dokumentation",
    description:
      "Grössere Betriebe arbeiten häufig mit Ausführungsklasse EXC3, was höhere NDT-Quoten, vollständigere WPS-Abdeckung und strengere Personalqualifikationsnachweise bedeutet.",
  },
  {
    icon: Network,
    title: "Mehrere Schweisskoordinatoren, eine WPK-Pflege",
    description:
      "Wer ist verantwortlich? Wer hat welche Dokumente aktualisiert? In grossen Betrieben entsteht Redundanz und Konfusion bei der WPK-Pflege ohne zentrales System.",
  },
];

const features = [
  {
    icon: Users,
    title: "Multi-User-Zugriff",
    description:
      "Mehrere Schweisskoordinatoren arbeiten gleichzeitig im System. Rollenvergabe: Viewer, Editor, Admin.",
  },
  {
    icon: BarChart3,
    title: "EXC3-Modus mit erweiterter Gap-Analyse",
    description:
      "Automatische Prüfung von NDT-Planungspflichten, Erstprüfungsberichten und härterer Qualifikationsanforderungen.",
  },
  {
    icon: FileSearch,
    title: "WPS-Abdeckungsmatrix",
    description:
      "Visualisierung welche Verfahren, Werkstoffgruppen und Positionen durch gültige WPQR abgedeckt sind — und wo Lücken bestehen.",
  },
  {
    icon: FileDown,
    title: "Audit-Paket für TÜV, DNV und Metall-Zert",
    description:
      "Druckfertiges Dokumentenpaket nach den Checklisten der wichtigsten deutschen Zertifizierungsstellen.",
  },
];

const faqs = [
  {
    q: "Kann AuditReady für EXC3-Betriebe genutzt werden?",
    a: "Ja. Der Professional-Plan unterstützt EXC3 vollständig, einschliesslich erweiterter Gap-Analyse nach EN 1090-2 Tabelle 24 für NDT-Planung und härterer Qualifikationsprüfungen.",
  },
  {
    q: "Wie viele Benutzer können gleichzeitig im System arbeiten?",
    a: "Im Professional-Paket bis zu 10 Benutzer. Grössere Teams können das Enterprise-Paket anfragen, das unbegrenzte Benutzer und Rollenmanagement bietet.",
  },
  {
    q: "Kann ich Audit-Pakete direkt an die Zertifizierungsstelle senden?",
    a: "Ja. AuditReady generiert ein druckfertiges PDF-Paket mit Inhaltsverzeichnis und Seiten-Referenzen. Das Paket orientiert sich an den Standardchecklisten von TÜV, DNV und Metall-Zert.",
  },
  {
    q: "Werden Datenänderungen protokolliert?",
    a: "Ja. Alle Änderungen an WPS, Schweisserzeugnissen und WPK-Dokumenten werden mit Zeitstempel und Benutzer protokolliert. Das Änderungsprotokoll kann für den Auditor exportiert werden.",
  },
];

export default function StahlbauMittelstandPage() {
  return (
    <>
      <WebPageSchema
        title="EN 1090 WPK Software für Stahlbau-Unternehmen – AuditReady"
        description="Compliance-Score, Gap-Analyse für EXC2/EXC3 und automatisierte Audit-Pakete für Stahlbau-Betriebe."
        url="/stahlbau-mittelstand"
      />
      <BreadcrumbSchema
        items={[
          { label: "Stahlbau Mittelstand", href: "/stahlbau-mittelstand" },
        ]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            { label: "Stahlbau Mittelstand", href: "/stahlbau-mittelstand" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <Badge variant="secondary" className="mb-4">
            Für mittelständische Stahlbau-Unternehmen
          </Badge>
          <h1 className="heading-hero mb-6 max-w-3xl">
            Stahlbau-Unternehmen: Compliance-Score und Audit-Paket für EXC2 und
            EXC3
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Bei mehreren Schweisskoordinatoren, dutzenden Schweisserzeugnissen
            und parallelen Projekten verliert die WPK-Pflege schnell den
            Überblick. AuditReady bringt alle Daten in ein zentrales Cockpit —
            mit klarem Compliance-Status für jeden Auditor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/wpk-software#beta-anmeldung">
                Compliance-Score starten
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/tools/audit-bereitschafts-check">
                Audit-Check starten
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <h2 className="heading-section text-center mb-4">
            Typische Herausforderungen im Stahlbau-Mittelstand
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Mit wachsender Betriebsgrösse steigt die Compliance-Komplexität
            exponentiell.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((c) => (
              <div
                key={c.title}
                className="bg-background rounded-xl p-6 border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <c.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="heading-section text-center mb-4">
            Leistungsumfang für Stahlbau-Betriebe
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Von Multi-User-Workflows bis zur EXC3-spezifischen Gap-Analyse.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXC Table */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <h2 className="heading-section text-center mb-8">
            EXC2 vs. EXC3 auf einen Blick
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-background rounded-xl border border-border overflow-hidden">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left p-4 font-semibold">Anforderung</th>
                  <th className="text-center p-4 font-semibold">EXC2</th>
                  <th className="text-center p-4 font-semibold">EXC3</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["NDT-Quote Stumpfnähte", "5–10 %", "10–20 %"],
                  ["WPS-Dokumentation", "Erforderlich", "Vollständig + WPQR"],
                  ["Schweisskoordinator", "SFI/EWS", "IWE/EWT Minimum"],
                  ["Materialzeugnisse", "EN 10204 3.1", "EN 10204 3.1+"],
                  ["Änderungsprotokoll", "Empfohlen", "Pflicht"],
                ].map(([req, exc2, exc3]) => (
                  <tr key={req} className="border-t border-border">
                    <td className="p-4 text-sm">{req}</td>
                    <td className="p-4 text-sm text-center text-muted-foreground">
                      {exc2}
                    </td>
                    <td className="p-4 text-sm text-center font-medium text-primary">
                      {exc3}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-section text-center mb-12">Häufige Fragen</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-background rounded-lg border border-border group"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer font-medium list-none">
                  {faq.q}
                  <ChevronDown className="h-4 w-4 text-muted-foreground group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <p className="px-5 pb-5 text-muted-foreground text-sm">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Compliance-Score für Ihren Stahlbaubetrieb — jetzt 30 Tage kostenlos
            testen
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Keine Kreditkarte erforderlich. Für EXC2 und EXC3 Betriebe.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/wpk-software#beta-anmeldung">
              Kostenlos starten
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
