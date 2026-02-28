import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AuditCheck } from "@/components/tools/AuditCheck";

export const metadata: Metadata = {
  title: "EN 1090 Audit-Bereitschafts-Check – Kostenloses Online-Tool",
  description:
    "Kostenloser EN 1090 Compliance-Check: 10 Fragen, 3 Minuten, sofortiger Compliance-Score. Erfahren Sie, ob Ihr Betrieb bereit für das nächste Überwachungsaudit ist.",
  alternates: {
    canonical: `${siteConfig.url}/tools/audit-bereitschafts-check`,
  },
  openGraph: {
    title: "EN 1090 Audit-Bereitschafts-Check – Kostenloses Online-Tool",
    description:
      "10 Fragen, 3 Minuten, sofortiger Compliance-Score. Jetzt kostenlos testen.",
    url: `${siteConfig.url}/tools/audit-bereitschafts-check`,
  },
};

export default function AuditBereitschaftsCheckPage() {
  return (
    <>
      <WebPageSchema
        title="EN 1090 Audit-Bereitschafts-Check – Kostenloses Online-Tool"
        description="Kostenloser EN 1090 Compliance-Check: 10 Fragen, 3 Minuten, sofortiger Compliance-Score."
        url="/tools/audit-bereitschafts-check"
      />
      <BreadcrumbSchema
        items={[
          { label: "Tools", href: "/tools/audit-bereitschafts-check" },
          {
            label: "Audit-Bereitschafts-Check",
            href: "/tools/audit-bereitschafts-check",
          },
        ]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            {
              label: "Audit-Bereitschafts-Check",
              href: "/tools/audit-bereitschafts-check",
            },
          ]}
        />
      </div>

      <AuditCheck />
    </>
  );
}
