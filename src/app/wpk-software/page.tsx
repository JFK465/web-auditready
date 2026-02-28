import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import { SoftwareLandingPage } from "@/components/software/SoftwareLandingPage";
import {
  SoftwareAppSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "WPK Software – AuditReady | Digitale EN 1090-Compliance-Lösung",
  description:
    "WPK Software für Metallbau und Stahlbau: Compliance-Score, Gap-Analyse und Audit-Paket auf Knopfdruck. Jetzt kostenlos testen. DSGVO-konform, Made in Germany.",
  alternates: { canonical: `${siteConfig.url}/wpk-software` },
  openGraph: {
    title: "WPK Software – AuditReady",
    description:
      "WPK Software für EN 1090-zertifizierte Metallbau-Betriebe: Compliance-Score, Gap-Analyse und druckfertiges Audit-Paket.",
    url: `${siteConfig.url}/wpk-software`,
  },
};

export default function WPKSoftwarePage() {
  return (
    <>
      <SoftwareAppSchema
        name="AuditReady WPK Software"
        description="Spezialisierte WPK-Software für EN 1090-zertifizierte Metallbau-Betriebe im DACH-Raum."
        url="/wpk-software"
      />
      <BreadcrumbSchema
        items={[{ label: "WPK Software", href: "/wpk-software" }]}
      />
      <SoftwareLandingPage />
    </>
  );
}
