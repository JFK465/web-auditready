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
  CheckCircle,
  Clock,
  Users,
  Shield,
  Gauge,
  Bell,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "EN 1090 WPK Software für Schlosserei und Metallbau – AuditReady",
  description:
    "AuditReady hilft Schlossereien und Metallbaubetrieben mit 10-30 Mitarbeitern, ihr WPK-System zu digitalisieren und immer audit-bereit zu sein. Kostenlos testen.",
  alternates: { canonical: `${siteConfig.url}/schlosserei-metallbau` },
  openGraph: {
    title: "EN 1090 WPK Software für Schlosserei und Metallbau – AuditReady",
    description:
      "WPK digitalisieren, Compliance-Score auf einen Blick, Audit-Paket auf Knopfdruck. Speziell für kleine Schlossereien und Metallbau-Handwerk.",
    url: `${siteConfig.url}/schlosserei-metallbau`,
  },
};

const challenges = [
  {
    icon: Users,
    title: "Chef = Schweisskoordinator = Buchhalter",
    description:
      "In kleinen Betrieben trägt eine Person alle Hüte. Für WPK-Pflege bleibt keine Zeit — bis das Audit kommt.",
  },
  {
    icon: Clock,
    title: "Zertifizierung auf Kundendruck erworben",
    description:
      "Viele Schlossereien haben die EN 1090-Zertifizierung einmalig erworben, weil ein Auftraggeber sie forderte. Seitdem liegt das WPK-Handbuch im Ordner und wird nie aktualisiert.",
  },
  {
    icon: Shield,
    title: "Preis-Sensitivität bei Softwarekauf",
    description:
      "Ein spezialisiertes QM-System kostet im Handwerk oft mehr als erwartet — oder ist zu komplex für den tatsächlichen Bedarf eines 15-MA-Betriebs.",
  },
];

const features = [
  {
    icon: CheckCircle,
    title: "Schnell-Einrichtung in 30 Minuten",
    description:
      "Kein IT-Wissen nötig. WPK-Handbuch-Vorlage für EXC2, Schweisserzeugnisse einpflegen, fertig.",
  },
  {
    icon: Bell,
    title: "Automatische Ablauferinnerungen",
    description:
      "ISO 9606-1-Zeugnisse Ihrer Schweisser — AuditReady meldet 60 Tage vor Ablauf per E-Mail.",
  },
  {
    icon: Gauge,
    title: "Compliance-Score als tägliche Orientierung",
    description:
      "Wie der Tankfüllanzeiger im Auto — immer sehen, ob alles in Ordnung ist.",
  },
  {
    icon: Shield,
    title: "Starter-Paket ab 79 EUR/Monat",
    description:
      "Für kleine Betriebe mit bis zu 5 Schweissern. Kein Overengineering, kein Enterprise-Preis.",
  },
];

const faqs = [
  {
    q: "Ist AuditReady auch für kleine Schlossereien mit 5 Schweissern geeignet?",
    a: "Ja. Das Starter-Paket deckt genau diesen Anwendungsfall ab: bis zu 5 Schweisserzeugnisse, ein WPK-Handbuch und den Audit-Paket-Generator. Grössere Funktionen werden erst mit dem Professional-Paket relevant.",
  },
  {
    q: "Kann ich mein bestehendes Word-WPK-Handbuch importieren?",
    a: "Ja. AuditReady bietet einen Import-Assistenten für Word- und PDF-Handbücher sowie Excel-Listen. Die Daten werden in das digitale WPK-Cockpit übertragen.",
  },
  {
    q: "Brauche ich IT-Kenntnisse für die Einrichtung?",
    a: "Nein. AuditReady ist ein reines Cloud-System ohne Installation. Sie benötigen nur einen Browser und eine E-Mail-Adresse.",
  },
  {
    q: "Erkennt AuditReady wenn meine Ausführungsklasse EXC2 ist?",
    a: "Ja. Beim Setup wählen Sie Ihre Ausführungsklasse. AuditReady passt die Compliance-Prüfungen und Gap-Analyse automatisch an EXC2-Anforderungen an.",
  },
  {
    q: "Was passiert, wenn ich kündige — behalte ich meine Dokumente?",
    a: "Ja. Alle Ihre Dokumente können vor der Kündigung als ZIP-Archiv exportiert werden. Ihre Daten gehören Ihnen.",
  },
];

export default function SchlossereiMetallbauPage() {
  return (
    <>
      <WebPageSchema
        title="EN 1090 WPK Software für Schlosserei und Metallbau – AuditReady"
        description="AuditReady hilft Schlossereien und Metallbaubetrieben mit 10-30 Mitarbeitern, ihr WPK-System zu digitalisieren."
        url="/schlosserei-metallbau"
      />
      <BreadcrumbSchema
        items={[
          { label: "Schlosserei & Metallbau", href: "/schlosserei-metallbau" },
        ]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            {
              label: "Schlosserei & Metallbau",
              href: "/schlosserei-metallbau",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <Badge variant="secondary" className="mb-4">
            Für Schlossereien und Metallbau-Handwerk
          </Badge>
          <h1 className="heading-hero mb-6 max-w-3xl">
            Schlosserei und Metallbau-Handwerk: Immer audit-bereit für EN 1090
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Als Schlosser oder Metallbauer tragen Sie gleichzeitig die
            Verantwortung als Geschäftsführer, Schweisskoordinator und
            Buchhalter. AuditReady übernimmt die WPK-Pflege — damit Sie sich auf
            Ihre Arbeit konzentrieren können.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/wpk-software#beta-anmeldung">
                Jetzt 30 Tage kostenlos testen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/tools/audit-bereitschafts-check">
                Compliance-Check starten
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <h2 className="heading-section text-center mb-4">
            Typische Herausforderungen im Metallbau-Handwerk
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Diese Probleme kennen viele Schlossereien — AuditReady löst sie
            alle.
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
            Was AuditReady für Ihre Schlosserei leistet
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Speziell auf kleine Metallbau-Betriebe ausgerichtet — ohne
            Overengineering.
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

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-section text-center mb-12">
            Häufige Fragen von Schlossereien
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
            Jetzt 30 Tage kostenlos testen — für Schlossereien und
            Metallbau-Handwerk
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Keine Kreditkarte. Keine Installation. Einrichtung in 30 Minuten.
          </p>
          <Button size="lg" asChild>
            <Link href="/wpk-software#beta-anmeldung">
              Kostenlos starten
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link
              href="/wissen/wpk-handbuch"
              className="hover:text-foreground underline-offset-4 hover:underline"
            >
              WPK-Handbuch Leitfaden
            </Link>
            <Link
              href="/wissen/ausführungsklassen"
              className="hover:text-foreground underline-offset-4 hover:underline"
            >
              Ausführungsklassen EXC1-EXC4
            </Link>
            <Link
              href="/tools/audit-bereitschafts-check"
              className="hover:text-foreground underline-offset-4 hover:underline"
            >
              Kostenloser Audit-Check
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
