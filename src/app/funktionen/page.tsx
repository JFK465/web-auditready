import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Gauge,
  TrendingUp,
  Search,
  Bell,
  FileDown,
  CheckSquare,
  Users,
  Archive,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Funktionen – AuditReady | WPK-Cockpit, Gap-Analyse und Audit-Paket",
  description:
    "Alle Funktionen von AuditReady: WPK-Cockpit, automatischer Compliance-Score, Gap-Analyse, Schweißerzeugnisse-Verwaltung und druckfertiges Audit-Paket. Jetzt testen.",
  alternates: { canonical: `${siteConfig.url}/funktionen` },
};

const modules = [
  {
    id: "wpk-cockpit",
    icon: Gauge,
    title: "WPK-Cockpit",
    description:
      "Das zentrale Dashboard Ihres WPK-Systems. Alle relevanten Kennzahlen auf einen Blick: Compliance-Score, offene Maßnahmen, ablaufende Zeugnisse und WPS-Abdeckungsstatus. Für Geschäftsführer und Schweißkoordinator gleichermaßen ausgelegt.",
    details: [
      "Tagesaktueller Compliance-Score (0–100%)",
      "Ampel-System: grün, gelb, rot",
      "Sofortige Übersicht aller offenen Punkte",
      "Direkte Links zu Maßnahmenpaketen",
    ],
  },
  {
    id: "compliance-score",
    icon: TrendingUp,
    title: "Compliance-Score",
    description:
      "AuditReady berechnet täglich Ihren Compliance-Score auf Basis der aktuellen WPK-Daten. Der Score berücksichtigt Schweißerqualifikationen, WPS-Abdeckung, Dokumentenvollständigkeit und aktuelle Materialnachweise.",
    details: [
      "Automatische Berechnung ohne manuelle Eingabe",
      "Normkonforme Prüflogik für EN 1090-1",
      "EXC2 und EXC3 separat bewertbar",
      "Score-Historie und Trend-Anzeige",
    ],
  },
  {
    id: "gap-analyse",
    icon: Search,
    title: "Gap-Analyse",
    description:
      "Die automatische Gap-Analyse erkennt alle Compliance-Lücken in Ihrem WPK-System und listet sie mit priorisierten Handlungsempfehlungen auf — sortiert nach Kritikalität für das nächste Audit.",
    details: [
      "Automatische Erkennung fehlender Dokumente",
      "Erkennung abgelaufener Schweißerzeugnisse",
      "WPS-Abdeckungslücken nach Verfahren und Werkstoff",
      "Handlungsempfehlungen mit Zeitschätzung",
    ],
  },
  {
    id: "audit-paket",
    icon: FileDown,
    title: "Audit-Paket-Generator",
    description:
      "Generieren Sie das vollständige Audit-Paket für Ihr Überwachungsaudit per Knopfdruck. Das druckfertige PDF-Paket enthält WPK-Handbuch, Schweißerqualifikationsnachweise, WPS-Liste und Materialnachweise — mit Inhaltsverzeichnis und Seitenreferenzen.",
    details: [
      "PDF-Export in einem Klick",
      "Orientiert an TÜV, DNV, Metall-Zert und SLV Checklisten",
      "Automatisches Inhaltsverzeichnis",
      "Kompatibel mit allen notifizierten Stellen in Deutschland",
    ],
  },
  {
    id: "schweisserzeugnisse",
    icon: Users,
    title: "Schweißerzeugnisse-Manager",
    description:
      "Verwalten Sie alle ISO 9606-1-Zeugnisse Ihrer Schweißer an einem Ort. AuditReady erinnert Sie automatisch per E-Mail, wenn Zeugnisse ablaufen — 60 und 30 Tage vor dem Ablaufdatum.",
    details: [
      "Alle Schweißer mit vollständigen Qualifikationsdaten",
      "Automatische E-Mail-Erinnerungen vor Ablauf",
      "Überblick nach Verfahren, Position, Werkstoffgruppe",
      "Verlängerungshistorie dokumentiert",
    ],
  },
  {
    id: "wps-check",
    icon: CheckSquare,
    title: "WPS-Abdeckungscheck",
    description:
      "Die WPS-Abdeckungsmatrix zeigt auf einen Blick, welche Schweißverfahren, Werkstoffgruppen und Schweißpositionen durch gültige WPQR abgedeckt sind — und wo Lücken bestehen, die beim nächsten Audit auffallen würden.",
    details: [
      "Matrix nach Verfahren × Werkstoffgruppe × Position",
      "Farbliche Hervorhebung von Lücken",
      "Gültigkeitsstatus jeder WPQR sichtbar",
      "Export als PDF für Auditoren",
    ],
  },
  {
    id: "dokumente",
    icon: Archive,
    title: "Dokumenten-Archiv",
    description:
      "Alle WPK-relevanten Dokumente an einem Ort: EN 10204-Materialnachweise, ZfP-Protokolle, Erstprüfungsberichte, WPS und WPQR. Durchsuchbar, versioniert und mit Zugriffsprotokoll.",
    details: [
      "Zentrales Dokumenten-Repository",
      "Volltext-Suche über alle Dokumente",
      "Versionierung mit Änderungsprotokoll",
      "Audit-Protokoll für Auditor-Einsicht",
    ],
  },
  {
    id: "ablauf-erinnerungen",
    icon: Bell,
    title: "Ablauf-Erinnerungen",
    description:
      "Nie wieder unbemerkt ablaufende Fristen: AuditReady überwacht alle zeitkritischen Dokumente und Qualifikationen und sendet automatisch E-Mail-Benachrichtigungen an zugewiesene Verantwortliche.",
    details: [
      "Schweißerzeugnisse (ISO 9606-1)",
      "WPS-Gültigkeit und Revisionspflichten",
      "Materialnachweise und Prüffristen",
      "Konfigurierbare Erinnerungszeitpunkte",
    ],
  },
];

export default function FunktionenPage() {
  return (
    <>
      <WebPageSchema
        title="Funktionen – AuditReady"
        description="Alle Funktionen von AuditReady für EN 1090-Compliance."
        url="/funktionen"
      />
      <div className="py-16 md:py-20">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: "Funktionen", href: "/funktionen" }]} />

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="heading-hero mb-4">
              Alle Funktionen für Ihre EN 1090-Compliance
            </h1>
            <p className="text-lg text-muted-foreground">
              AuditReady vereint alle Werkzeuge für das WPK-System in einer
              Plattform — vom Compliance-Score über die Gap-Analyse bis zum
              druckfertigen Audit-Paket.
            </p>
          </div>

          <div className="space-y-16">
            {modules.map((mod, i) => (
              <div
                key={mod.id}
                id={mod.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <mod.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="heading-sub">{mod.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {mod.description}
                  </p>
                  <ul className="space-y-2">
                    {mod.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="text-primary mt-0.5">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`bg-muted/30 rounded-2xl aspect-video flex items-center justify-center ${
                    i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <mod.icon className="h-24 w-24 text-primary/20" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20 py-12 bg-primary/5 rounded-2xl">
            <h2 className="heading-sub mb-4">
              Überzeugt? Jetzt kostenlos testen.
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Während der Beta-Phase sind alle Funktionen kostenlos zugänglich.
              Kein Kreditkarte, keine Mindestlaufzeit.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <Link href="/wpk-software#beta-anmeldung">
                Beta-Zugang sichern
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
