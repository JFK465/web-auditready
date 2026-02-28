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
  HelpCircle,
  AlertTriangle,
  Wrench,
  Settings,
  FileText,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "EN 1090-3 WPK Software für Aluminiumbau und Fassadenbau – AuditReady",
  description:
    "AuditReady unterstützt EN 1090-3 für Aluminiumkonstruktionen: WPK-Cockpit, Gap-Analyse nach EN 1090-3 und Audit-Paket für Fassadenbauer.",
  alternates: { canonical: `${siteConfig.url}/aluminium-fassadenbau` },
  openGraph: {
    title:
      "EN 1090-3 WPK Software für Aluminiumbau und Fassadenbau – AuditReady",
    description:
      "EN 1090-3 Compliance für Aluminiumkonstruktionen und Fassadenbau — spezialisierter Modus mit aluminium-spezifischen WPS-Vorlagen.",
    url: `${siteConfig.url}/aluminium-fassadenbau`,
  },
};

const challenges = [
  {
    icon: HelpCircle,
    title: "EN 1090-3 ist weniger bekannt",
    description:
      "Die meisten EN 1090-Experten und Software-Tools fokussieren auf Stahl. Aluminiumbauer stehen häufig allein da — mit weniger Beratungsangebot und weniger Tools.",
  },
  {
    icon: AlertTriangle,
    title: "Hohe Zertifizierungskosten bei wenig Wissen",
    description:
      "Die WPK-Anforderungen für Aluminium sind weniger dokumentiert. Fehler beim Aufbau des WPK-Systems werden erst beim Audit entdeckt — dann ist es teuer.",
  },
  {
    icon: Wrench,
    title: "Spezifische Schweissverfahren für Aluminium",
    description:
      "MIG-Schweissen (131), Wolfram-Inertgas (141) — andere Parameter als bei Stahl, andere Qualifikationsanforderungen nach ISO 9606-2.",
  },
];

const features = [
  {
    icon: Settings,
    title: "EN 1090-3-Modus",
    description:
      "Beim Setup wählen Sie EN 1090-3 (Aluminium). Die Gap-Analyse, Compliance-Prüfungen und WPS-Vorlagen sind auf Aluminium-spezifische Anforderungen ausgerichtet.",
  },
  {
    icon: FileText,
    title: "Aluminium-spezifische WPS-Vorlagen",
    description:
      "WPS-Vorlagen für die gängigsten Aluminium-Schweissverfahren nach ISO 15609-1 und ISO 15610.",
  },
  {
    icon: FileText,
    title: "Fassadenbau-Dokumentation",
    description:
      "Spezifische Dokumentationsvorlagen für Fassadenelemente mit EN 1090-3-Anforderungen.",
  },
];

const faqs = [
  {
    q: "Unterstützt AuditReady EN 1090-3 für Aluminium oder nur EN 1090-2 für Stahl?",
    a: "AuditReady unterstützt beide Normen. Beim Einrichten Ihres Kontos wählen Sie EN 1090-2 (Stahl), EN 1090-3 (Aluminium) oder beide — wenn Ihr Betrieb beides verarbeitet.",
  },
  {
    q: "Welche Schweissverfahren für Aluminium werden abgebildet?",
    a: "Aktuell MIG (131), WIG (141) und Plasmaschweissen (15). Weitere Verfahren werden auf Basis von Beta-Feedback ergänzt.",
  },
  {
    q: "Gibt es eine spezifische Checkliste für EN 1090-3-Audits?",
    a: "Ja. AuditReady enthält eine eigenständige Gap-Analyse-Vorlage für EN 1090-3, die sich an den Überwachungsaudit-Checklisten der gängigen Zertifizierungsstellen orientiert.",
  },
];

export default function AluminiumFassadenbauPage() {
  return (
    <>
      <WebPageSchema
        title="EN 1090-3 WPK Software für Aluminiumbau und Fassadenbau – AuditReady"
        description="EN 1090-3 Compliance-Software für Aluminiumkonstruktionen und Fassadenbauer."
        url="/aluminium-fassadenbau"
      />
      <BreadcrumbSchema
        items={[
          { label: "Aluminium & Fassadenbau", href: "/aluminium-fassadenbau" },
        ]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            {
              label: "Aluminium & Fassadenbau",
              href: "/aluminium-fassadenbau",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <Badge variant="secondary" className="mb-4">
            Für Aluminiumbau und Fassadenbau — EN 1090-3
          </Badge>
          <h1 className="heading-hero mb-6 max-w-3xl">
            Aluminiumbau und Fassadenbau: EN 1090-3 Compliance mit AuditReady
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Für Betriebe die Aluminiumkonstruktionen herstellen gilt EN 1090-3 —
            nicht EN 1090-2. Die spezifischen WPK-Anforderungen für Aluminium
            werden von den wenigsten QM-Tools unterstützt. AuditReady ist eine
            der ersten Lösungen, die EN 1090-3 explizit abbildet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/wpk-software#beta-anmeldung">
                EN 1090-3 Compliance-Check starten
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/tools/audit-bereitschafts-check">
                Kostenloser Check
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* EN 1090-3 Info Banner */}
      <section className="py-10 bg-accent/10 border-y border-accent/30">
        <div className="container-custom">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
              <HelpCircle className="h-5 w-5 text-accent-foreground" />
            </div>
            <div>
              <h2 className="font-semibold mb-1">Was ist EN 1090-3?</h2>
              <p className="text-muted-foreground text-sm max-w-3xl">
                EN 1090-3 regelt die technischen Anforderungen für die
                Ausführung von Aluminiumtragwerken. Sie ist das
                Aluminium-Pendant zu EN 1090-2 (Stahl) und hat eigene
                Anforderungen an WPS, WPQR und Qualifikation des
                Schweisskoordinators. Seit 2013 ist EN 1090-3 mandatiert und für
                alle tragenden Aluminiumkonstruktionen in der EU verpflichtend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <h2 className="heading-section text-center mb-4">
            Herausforderungen für Aluminiumbauer
          </h2>
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
            AuditReady für EN 1090-3 Betriebe
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-muted/30 rounded-xl p-6 border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-section text-center mb-12">
            Häufige Fragen zu EN 1090-3
          </h2>
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
      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="heading-section mb-4">
            EN 1090-3 Compliance-Check starten — kostenlos und unverbindlich
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Speziell für Aluminiumbau und Fassadenbau. 30 Tage kostenlos.
          </p>
          <Button size="lg" asChild>
            <Link href="/wpk-software#beta-anmeldung">
              Jetzt kostenlos starten
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
