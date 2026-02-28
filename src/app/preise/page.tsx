import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Preise – AuditReady | WPK Software für EN 1090 ab 79 EUR/Monat",
  description:
    "AuditReady Preise: Starter ab 79 EUR/Monat, Professional ab 149 EUR/Monat. Während der Beta kostenlos. Keine Kreditkarte nötig. Jetzt testen.",
  alternates: { canonical: `${siteConfig.url}/preise` },
};

const tiers = [
  {
    name: "Starter",
    price: "79",
    description: "Schlossereien und Kleinstbetriebe mit 1–5 Schweißern",
    features: [
      "WPK-Cockpit",
      "Compliance-Score",
      "Bis zu 5 Schweißerzeugnisse",
      "Bis zu 20 WPS",
      "Gap-Analyse",
      "Audit-Paket-Generator",
      "1 Benutzer",
      "E-Mail-Support",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "149",
    description: "KMU mit 6–30 Schweißern, EXC2/EXC3",
    features: [
      "Alles aus Starter",
      "Unbegrenzte Schweißerzeugnisse",
      "Unbegrenzte WPS",
      "WPS-Abdeckungsmatrix",
      "EXC3-Modus mit erweiterter Gap-Analyse",
      "Bis zu 10 Benutzer mit Rollenverwaltung",
      "Dokumenten-Archiv",
      "Ablauf-Erinnerungen (60 + 30 Tage)",
      "Prioritärer E-Mail-Support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Auf Anfrage",
    description: "Betriebe ab 30 MA, Konzerne, Mehrstandorte",
    features: [
      "Alles aus Professional",
      "Unbegrenzte Benutzer",
      "Mehrstandort-Verwaltung",
      "API-Zugang",
      "SSO/SAML-Integration",
      "Dedizierter Account Manager",
      "SLA-Vereinbarung",
    ],
    highlighted: false,
  },
];

export default function PreisePage() {
  return (
    <div className="py-16 md:py-20">
      <div className="container-custom">
        <Breadcrumbs items={[{ label: "Preise", href: "/preise" }]} />

        <div className="text-center max-w-3xl mx-auto mb-6">
          <h1 className="heading-hero mb-4">
            Transparente Preise für jeden Betrieb
          </h1>
          <p className="text-lg text-muted-foreground">
            Monatlich kündbar. Keine Einrichtungsgebühren. Keine versteckten
            Kosten.
          </p>
        </div>

        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm">
            BETA-PHASE — Alle Pläne jetzt kostenlos. 30% Rabatt nach Beta-Ende
            für Beta-Nutzer.
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl border p-8 flex flex-col ${
                tier.highlighted
                  ? "border-primary shadow-lg ring-1 ring-primary bg-card"
                  : "bg-card"
              }`}
            >
              {tier.highlighted && (
                <Badge className="self-start mb-4 bg-primary text-primary-foreground">
                  Beliebtester Plan
                </Badge>
              )}
              <h2 className="text-2xl font-bold mb-1">{tier.name}</h2>
              <div className="mb-3">
                <div className="text-sm text-muted-foreground line-through">
                  {tier.price === "Auf Anfrage"
                    ? ""
                    : `${tier.price} EUR/Monat zzgl. MwSt.`}
                </div>
                <div className="text-3xl font-bold text-primary">
                  {tier.price === "Auf Anfrage" ? "Auf Anfrage" : "BETA: 0 EUR"}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {tier.price !== "Auf Anfrage" &&
                    "Kostenlos während der Beta-Phase"}
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                {tier.description}
              </p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={tier.highlighted ? "default" : "outline"}
                className={`w-full ${tier.highlighted ? "bg-primary hover:bg-primary/90" : ""}`}
              >
                <Link
                  href={
                    tier.name === "Enterprise"
                      ? "/kontakt"
                      : "/wpk-software#beta-anmeldung"
                  }
                >
                  {tier.name === "Enterprise"
                    ? "Demo anfragen"
                    : "Jetzt kostenlos starten"}
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-muted/30 rounded-2xl p-8 max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-semibold mb-3">
            Noch Fragen zu den Preisen?
          </h2>
          <p className="text-muted-foreground mb-6">
            Wir helfen Ihnen, den richtigen Plan für Ihren Betrieb zu finden.
            Kontaktieren Sie uns — wir antworten innerhalb von 24 Stunden.
          </p>
          <Button variant="outline" asChild>
            <Link href="/kontakt">Demo anfragen</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
