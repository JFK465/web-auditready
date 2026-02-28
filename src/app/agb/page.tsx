import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen – AuditReady",
  description: "Allgemeine Geschäftsbedingungen von AuditReady.",
  alternates: { canonical: `${siteConfig.url}/agb` },
  robots: { index: false },
};

export default function AGBPage() {
  return (
    <div className="py-16">
      <div className="container-custom max-w-3xl">
        <Breadcrumbs items={[{ label: "AGB", href: "/agb" }]} />
        <h1 className="heading-hero mb-8">Allgemeine Geschäftsbedingungen</h1>
        <div className="prose prose-stone max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              § 1 Geltungsbereich
            </h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge
              zwischen AuditReady (Anbieter) und dem Kunden (Nutzer) über die
              Nutzung der SaaS-Software AuditReady.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              § 2 Vertragsschluss
            </h2>
            <p>
              Der Vertrag kommt durch Registrierung und Bestätigung der
              E-Mail-Adresse zustande. Für Beta-Nutzer gelten während der
              Beta-Phase besondere Konditionen (kostenlosen Zugang).
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              § 3 Leistungsumfang
            </h2>
            <p>
              AuditReady stellt eine browserbasierte Software zur Verwaltung von
              WPK-Systemen nach EN 1090 zur Verfügung. Der Umfang richtet sich
              nach dem gebuchten Tarif.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              § 4 Kündigung
            </h2>
            <p>
              Der Vertrag ist monatlich kündbar. Jahresverträge können zum Ende
              der Laufzeit gekündigt werden. Alle Daten können vor Kündigung als
              ZIP-Archiv exportiert werden.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              § 5 Haftung
            </h2>
            <p>
              AuditReady haftet nicht für Schäden, die aus der Nutzung oder
              Nichtnutzung der Software entstehen, soweit diese nicht auf
              Vorsatz oder grober Fahrlässigkeit beruhen. AuditReady ersetzt
              keine Rechtsberatung und übernimmt keine Gewähr für die
              Normkonformität Ihrer WPK-Dokumente.
            </p>
          </section>
          <p className="text-sm">Stand: Februar 2026</p>
        </div>
      </div>
    </div>
  );
}
