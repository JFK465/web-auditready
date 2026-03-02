import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Impressum – AuditReady",
  description: "Impressum von AuditReady gemäß § 5 TMG.",
  alternates: { canonical: `${siteConfig.url}/impressum` },
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <div className="py-16">
      <div className="container-custom max-w-3xl">
        <Breadcrumbs items={[{ label: "Impressum", href: "/impressum" }]} />
        <h1 className="heading-hero mb-8">Impressum</h1>
        <div className="prose prose-stone max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              AuditReady GmbH (in Gründung)
              <br />
              [Straße und Hausnummer]
              <br />
              [PLZ Ort]
              <br />
              Deutschland
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Kontakt
            </h2>
            <p>E-Mail: hallo@werkseigene-produktionskontrolle.de</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>[Name des Verantwortlichen]</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Haftungsausschluss
            </h2>
            <p>
              Die Inhalte dieser Website wurden sorgfältig erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
              jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß
              § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
