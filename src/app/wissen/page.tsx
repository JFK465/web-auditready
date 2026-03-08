import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "EN 1090 Wissen & Ratgeber – AuditReady",
  description:
    "Praxiswissen zu EN 1090, WPK-Handbuch, Ausführungsklassen, Schweisskoordinator und Überwachungsaudit für Metallbau-Betriebe im DACH-Raum.",
  alternates: { canonical: `${siteConfig.url}/wissen` },
  openGraph: {
    title: "EN 1090 Wissen & Ratgeber – AuditReady",
    description:
      "Alle Ratgeber zu EN 1090 Compliance, WPK und Audit-Vorbereitung für Metallbau-Betriebe.",
    url: `${siteConfig.url}/wissen`,
  },
};

const articles = [
  {
    title: "DIN EN 1090-1 erklärt",
    description:
      "Was regelt DIN EN 1090-1? WPK-Anforderungen, CE-Kennzeichnung und Konformitätsnachweisverfahren für Stahlbauteile.",
    href: "/wissen/din-en-1090-1",
    readTime: "8 Min.",
    tag: "Grundlagen",
  },
  {
    title: "Ausführungsklassen EXC1 bis EXC4",
    description:
      "EXC1, EXC2, EXC3 oder EXC4 — welche Ausführungsklasse gilt für Ihren Betrieb? Anforderungen und praktische Konsequenzen erklärt.",
    href: "/wissen/ausführungsklassen",
    readTime: "7 Min.",
    tag: "Grundlagen",
  },
  {
    title: "WPK-Handbuch nach EN 1090",
    description:
      "Was muss im WPK-Handbuch stehen? Pflichtkapitel, Aufbau und Tipps zur laufenden Aktualisierung nach EN 1090-1 Abschnitt 6.",
    href: "/wissen/wpk-handbuch",
    readTime: "9 Min.",
    tag: "Dokumentation",
  },
  {
    title: "Schweisskoordinator nach ISO 14731",
    description:
      "Pflichten, Qualifikationen (EWE, IWE, SFI) und Nachweispflichten des Schweisskoordinators im WPK-System.",
    href: "/wissen/schweisskoordinator",
    readTime: "8 Min.",
    tag: "Personal",
  },
  {
    title: "Das EN 1090-Überwachungsaudit",
    description:
      "Ablauf, Prüfpunkte und konkrete Vorbereitung auf das jährliche Überwachungsaudit. Was der Auditor wirklich prüft.",
    href: "/wissen/überwachungsaudit",
    readTime: "10 Min.",
    tag: "Audit",
  },
];

export default function WissenPage() {
  return (
    <>
      <WebPageSchema
        title="EN 1090 Wissen & Ratgeber – AuditReady"
        description="Praxiswissen zu EN 1090, WPK und Audit-Vorbereitung für Metallbau-Betriebe."
        url="/wissen"
      />
      <BreadcrumbSchema items={[{ label: "Wissen", href: "/wissen" }]} />

      <div className="container-custom py-4">
        <Breadcrumbs items={[{ label: "Wissen", href: "/wissen" }]} />
      </div>

      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-primary mb-4">
            <BookOpen className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wide">
              Wissen & Ratgeber
            </span>
          </div>
          <h1 className="heading-hero mb-4 max-w-3xl">
            EN 1090 Wissen für Metallbau-Betriebe
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Praxisorientiertes Fachwissen zu EN 1090, WPK-Handbuch,
            Ausführungsklassen und Audit-Vorbereitung — verständlich erklärt für
            Geschäftsführer und Schweisskoordinatoren.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group bg-background border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    {article.tag}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>
                <h2 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  {article.description}
                </p>
                <span className="text-primary text-sm font-medium flex items-center gap-1">
                  Artikel lesen
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tool CTA */}
      <section className="py-12 bg-muted/30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-background border border-border rounded-xl p-8">
            <div>
              <h2 className="font-bold text-xl mb-2">
                Wissen in die Praxis umsetzen
              </h2>
              <p className="text-muted-foreground">
                Testen Sie Ihre aktuelle Audit-Bereitschaft mit unserem
                kostenlosen EN 1090 Compliance-Check — 10 Fragen, 3 Minuten.
              </p>
            </div>
            <Button asChild className="flex-shrink-0">
              <Link href="/tools/audit-bereitschafts-check">
                Compliance-Check starten
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
