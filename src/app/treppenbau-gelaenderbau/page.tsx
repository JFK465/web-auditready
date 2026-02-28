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
  Grid,
  AlertTriangle,
  Users,
  Layers,
  FileSearch,
  FolderOpen,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "EN 1090 WPK Software für Treppenbau und Geländerbau – AuditReady",
  description:
    "AuditReady verwaltet alle WPS, Schweisserzeugnisse und EN 1090-Dokumente für Treppenbau- und Geländerbau-Betriebe. Audit-Paket auf Knopfdruck.",
  alternates: { canonical: `${siteConfig.url}/treppenbau-gelaenderbau` },
  openGraph: {
    title: "EN 1090 WPK Software für Treppenbau und Geländerbau – AuditReady",
    description:
      "WPS-Matrix, Schweisser-Qualifikationsmatrix und auftragsbasierte Dokumentation für Treppenbau-Betriebe.",
    url: `${siteConfig.url}/treppenbau-gelaenderbau`,
  },
};

const challenges = [
  {
    icon: Layers,
    title: "Hohe WPS-Variantenzahl",
    description:
      "Edelstahl, Baustahl, Aluminium — verschiedene Materialien je nach Kundenwunsch. Jede Kombination braucht eine gültige WPS mit WPQR-Deckung.",
  },
  {
    icon: Users,
    title: "Viele Schweisser für viele Positionen",
    description:
      "Treppenbau-Betriebe schweissen in vielen Positionen (PB, PC, PE, PF). Jeder Schweisser hat andere Qualifikationen — die Übersicht fehlt.",
  },
  {
    icon: AlertTriangle,
    title: "Wechselnde Werkstoffgruppen je Projekt",
    description:
      "Kunden fordern mal Feuerverzinkung, mal Edelstahl, mal Aluminium. Die EN 1090-Anforderungen ändern sich mit dem Material.",
  },
];

const features = [
  {
    icon: Grid,
    title: "WPS-Abdeckungsmatrix nach Verfahren und Werkstoffgruppe",
    description:
      "Welche WPS deckt welches Material in welcher Position ab — visualisiert in einer Matrix.",
  },
  {
    icon: Users,
    title: "Schweisser-Qualifikationsmatrix",
    description:
      "Welcher Schweisser ist für welches Verfahren und welche Position qualifiziert — und wann läuft die Qualifikation ab?",
  },
  {
    icon: AlertTriangle,
    title: "Materialtausch-Alarm",
    description:
      "Wenn ein neues Werkstoffprogramm im Betrieb eingeführt wird, prüft AuditReady automatisch ob die bestehenden WPS und WPQR die neue Werkstoffgruppe abdecken.",
  },
  {
    icon: FolderOpen,
    title: "Auftragsbasierte Dokumentation",
    description:
      "Pro Projekt lässt sich ein Dokumentations-Set zusammenstellen: WPS, Schweissernachweis, Materialnachweise — alles in einem Ordner.",
  },
];

const faqs = [
  {
    q: "Wir schweissen Baustahl und Edelstahl — brauchen wir für beides separate WPS?",
    a: "Ja. Stahl und Edelstahl gehören verschiedenen Werkstoffgruppen nach ISO/TR 15608 an. AuditReady prüft automatisch, ob Ihre WPQR die jeweilige Werkstoffgruppe abdeckt, und markiert Lücken in der Gap-Analyse.",
  },
  {
    q: "Wie viele WPS können im System verwaltet werden?",
    a: "Im Professional-Paket unbegrenzt viele WPS. Im Starter-Paket bis zu 20 WPS.",
  },
  {
    q: "Kann ich für jeden Kunden ein separates Audit-Paket generieren?",
    a: "Nein — das Audit-Paket bezieht sich immer auf den gesamten Betrieb (wie es bei Überwachungsaudits geprüft wird). Für auftragsbegleitende Dokumentation gibt es die Projekt-Dokumentation als separates Modul.",
  },
];

export default function TreppenbauGelaenderbauPage() {
  return (
    <>
      <WebPageSchema
        title="EN 1090 WPK Software für Treppenbau und Geländerbau – AuditReady"
        description="WPS-Matrix, Schweisser-Qualifikationsmatrix und Audit-Paket für Treppenbau- und Geländerbau-Betriebe."
        url="/treppenbau-gelaenderbau"
      />
      <BreadcrumbSchema
        items={[
          {
            label: "Treppenbau & Geländerbau",
            href: "/treppenbau-gelaenderbau",
          },
        ]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            {
              label: "Treppenbau & Geländerbau",
              href: "/treppenbau-gelaenderbau",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <Badge variant="secondary" className="mb-4">
            Für Treppenbau- und Geländerbau-Betriebe
          </Badge>
          <h1 className="heading-hero mb-6 max-w-3xl">
            Treppenbau und Geländerbau: Alle WPS und Schweisserzeugnisse im
            Griff
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Hohe Variantenzahl bei Materialien, Verbindungstypen und Positionen
            macht die WPS-Matrix im Treppenbau besonders komplex. AuditReady
            behält den Überblick — für jeden Auftrag, jeden Schweisser, jede
            Qualifikation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/wpk-software#beta-anmeldung">
                WPS-Matrix digitalisieren
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/tools/audit-bereitschafts-check">
                Compliance-Check
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <h2 className="heading-section text-center mb-4">
            Warum Treppenbau-Betriebe besondere Compliance-Anforderungen haben
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Material-Vielfalt und Positions-Komplexität machen die WPK-Pflege
            anspruchsvoller als in anderen Branchen.
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
            AuditReady-Funktionen für den Treppenbau
          </h2>
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

      {/* WPS Coverage Banner */}
      <section className="py-12 bg-primary/5 border-y border-primary/20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="flex items-center gap-4">
              <FileSearch className="h-10 w-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">WPS-Abdeckungscheck</h3>
                <p className="text-muted-foreground text-sm">
                  Sehen Sie auf einen Blick, welche Werkstoffgruppen und
                  Positionen durch Ihre WPQR abgedeckt sind — und wo Lücken
                  bestehen.
                </p>
              </div>
            </div>
            <Button asChild className="flex-shrink-0">
              <Link href="/wpk-software#beta-anmeldung">
                Jetzt testen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
      <section className="py-16 bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="heading-section mb-4">
            WPS-Matrix digitalisieren — jetzt kostenlos starten
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            30 Tage kostenlos. Keine Kreditkarte. Einrichtung ohne
            IT-Kenntnisse.
          </p>
          <Button size="lg" asChild>
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
