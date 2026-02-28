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
  Clock,
  BookOpen,
  ShieldAlert,
  FileDown,
  Gauge,
  Bell,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "EN 1090 Compliance als Subunternehmer im Stahlbau – AuditReady",
  description:
    "Als EN 1090-Subunternehmer müssen Sie jederzeit Compliance-Nachweise liefern. AuditReady hält Ihr WPK-System aktuell und bereitet Sie auf Auftraggeber-Audits vor.",
  alternates: { canonical: `${siteConfig.url}/subunternehmer-stahlbau` },
  openGraph: {
    title: "EN 1090 Compliance als Subunternehmer im Stahlbau – AuditReady",
    description:
      "EN 1090-Nachweise jederzeit abrufbereit. Compliance-Paket in 5 Minuten für Auftraggeber-Anfragen.",
    url: `${siteConfig.url}/subunternehmer-stahlbau`,
  },
};

const challenges = [
  {
    icon: Clock,
    title: "Auftraggeber fordern kurzfristig EN 1090-Nachweise",
    description:
      "Ein neuer Auftrag kommt rein. Der Auftraggeber verlangt WPK-Handbuch, aktuelle Schweisserzeugnisse und WPS-Nachweise. Ohne digitales System dauert die Zusammenstellung Tage.",
  },
  {
    icon: BookOpen,
    title: "WPK-Pflege ist keine Kernkompetenz",
    description:
      "Subunternehmer sind Spezialisten in ihrer Fertigungstechnik, nicht in Zertifizierungsmanagement. Das WPK-System existiert — wird aber kaum gepflegt.",
  },
  {
    icon: ShieldAlert,
    title: "Audit-Risiko durch Auftraggeber",
    description:
      "Grosse Hauptauftragnehmer führen eigene Lieferanten-Audits durch. Mängel kosten Aufträge.",
  },
];

const features = [
  {
    icon: FileDown,
    title: "Sofort-Export Compliance-Paket",
    description:
      "Alle relevanten Dokumente (WPK-Handbuch, Schweisserzeugnisse, WPS) als druckfertiges PDF-Paket — für Auftraggeber-Anfragen in Minuten statt Tagen.",
  },
  {
    icon: Gauge,
    title: "Compliance-Score zum Vorzeigen",
    description:
      'Ein klarer Compliance-Wert (z.B. "92% audit-bereit") als vertrauensbildendes Signal gegenüber Auftraggebern.',
  },
  {
    icon: Bell,
    title: "Erinnerungssystem für Ablaufdaten",
    description:
      "Alle Schweisserzeugnisse mit Ablaufdatum erfasst — automatische Erinnerungen, damit kein Zeugnis unbemerkt abläuft.",
  },
];

const faqs = [
  {
    q: "Kann ich das Compliance-Paket direkt per E-Mail an meinen Auftraggeber schicken?",
    a: "Ja. Das generierte PDF-Paket kann direkt aus dem System heruntergeladen und per E-Mail versandt werden. Ein Share-Link (mit Zugangscode) ist für eine spätere Version geplant.",
  },
  {
    q: "Ich bin neu zertifiziert — hilft AuditReady beim Aufbau des WPK-Systems von Grund auf?",
    a: "Ja. AuditReady bietet eine Schritt-für-Schritt-Einrichtung mit Vorlagen für das WPK-Handbuch nach EN 1090-1. Sie beantworten Fragen zu Ihrem Betrieb, und das System generiert eine Grundstruktur.",
  },
  {
    q: "Kann ich AuditReady auch nutzen, wenn ich sowohl als Haupt- als auch als Subunternehmer tätig bin?",
    a: "Ja. Die Softwarestruktur unterscheidet nicht zwischen diesen Rollen. Sie verwalten Ihre EN 1090-Compliance als einheitliches System.",
  },
];

export default function SubunternehmerStahlbauPage() {
  return (
    <>
      <WebPageSchema
        title="EN 1090 Compliance als Subunternehmer im Stahlbau – AuditReady"
        description="EN 1090-Nachweise jederzeit abrufbereit für Subunternehmer im Stahlbau."
        url="/subunternehmer-stahlbau"
      />
      <BreadcrumbSchema
        items={[
          { label: "Subunternehmer Stahlbau", href: "/subunternehmer-stahlbau" },
        ]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            {
              label: "Subunternehmer Stahlbau",
              href: "/subunternehmer-stahlbau",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <Badge variant="secondary" className="mb-4">
            Für Subunternehmer im Stahlbau
          </Badge>
          <h1 className="heading-hero mb-6 max-w-3xl">
            Subunternehmer im Stahlbau: EN 1090-Nachweise jederzeit abrufbereit
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Grosse Auftraggeber fordern bei jedem neuen Projekt EN
            1090-Nachweise. Mit AuditReady haben Sie alle Dokumente immer
            griffbereit — und können Compliance-Pakete in Minuten versenden,
            statt Stunden im Archiv zu suchen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/wpk-software#beta-anmeldung">
                Compliance-Paket in 5 Minuten
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/tools/audit-bereitschafts-check">
                Audit-Bereitschaft prüfen
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Speed Highlight */}
      <section className="py-10 bg-primary/5 border-y border-primary/20">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { value: "5 Min.", label: "statt Tagen für Compliance-Paket" },
              {
                value: "60 Tage",
                label: "vorher bei Zeugnisablauf benachrichtigt",
              },
              {
                value: "30 Tage",
                label: "kostenlos testen — ohne Kreditkarte",
              },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <h2 className="heading-section text-center mb-4">
            Typische Herausforderungen für Stahlbau-Subunternehmer
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
            Wie AuditReady Subunternehmer entlastet
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
      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="heading-section mb-4">
            Compliance-Paket in 5 Minuten — jetzt kostenlos einrichten
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            30 Tage kostenlos. Keine Kreditkarte. Sofort bereit für
            Auftraggeber-Anfragen.
          </p>
          <Button size="lg" asChild>
            <Link href="/wpk-software#beta-anmeldung">
              Kostenlos starten
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link
              href="/wissen/ueberwachungsaudit"
              className="hover:text-foreground underline-offset-4 hover:underline"
            >
              Überwachungsaudit verstehen
            </Link>
            <Link
              href="/blog/erstmalige-en-1090-zertifizierung"
              className="hover:text-foreground underline-offset-4 hover:underline"
            >
              Nach der Erstzertifizierung
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
