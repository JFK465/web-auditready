import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – AuditReady",
  description: "Datenschutzerklärung von AuditReady gemäß DSGVO.",
  alternates: { canonical: `${siteConfig.url}/datenschutz` },
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <div className="py-16">
      <div className="container-custom max-w-3xl">
        <Breadcrumbs items={[{ label: "Datenschutz", href: "/datenschutz" }]} />
        <h1 className="heading-hero mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-stone max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist
              die AuditReady GmbH (in Gründung). Kontakt:
              hallo@werkseigene-produktionskontrolle.de
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              2. Welche Daten wir erheben
            </h2>
            <p>
              Wir erheben folgende Daten, die Sie uns freiwillig mitteilen:
              Name, E-Mail-Adresse, Unternehmensname (über Kontaktformular und
              Beta-Registrierung). Technisch werden außerdem Server-Logfiles
              gespeichert (IP-Adresse, Datum/Uhrzeit, aufgerufene Seite,
              Browser-Typ).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              3. Zweck der Datenverarbeitung
            </h2>
            <p>
              Die erhobenen Daten werden ausschließlich zur Beantwortung von
              Anfragen und zur Verwaltung von Beta-Zugängen genutzt. Eine
              Weitergabe an Dritte erfolgt nicht.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              4. Rechtsgrundlage
            </h2>
            <p>
              Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b
              DSGVO (Vertragserfüllung) bzw. Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              5. Ihre Rechte
            </h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie
              ein Widerspruchsrecht und Beschwerderecht bei der zuständigen
              Datenschutzbehörde. Kontakt:
              hallo@werkseigene-produktionskontrolle.de
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              6. Cookies
            </h2>
            <p>
              Diese Website verwendet technisch notwendige Cookies. Analyse-
              oder Werbe-Cookies werden nicht gesetzt.
            </p>
          </section>

          <p className="text-sm">Stand: Februar 2026</p>
        </div>
      </div>
    </div>
  );
}
