import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import { FAQSchema } from "@/components/seo/StructuredData";
import {
  HeroSection,
  SocialProofBar,
  PainPointsSection,
  HowItWorksSection,
  FeaturesGrid,
  PricingPreview,
  HomepageFAQ,
  SEOContentSection,
  CTASection,
} from "@/components/home";

export const metadata: Metadata = {
  title: "WPK Software für Metallbau – AuditReady | EN 1090 Audit-Vorbereitung",
  description:
    "AuditReady digitalisiert Ihr WPK-System nach EN 1090: Compliance-Score, automatische Gap-Analyse und Ein-Klick Audit-Paket. Kostenlos testen. DSGVO-konform.",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    url: siteConfig.url,
    title: "WPK Software für Metallbau – AuditReady",
    description:
      "Digitales WPK-Cockpit für EN 1090-zertifizierte Metallbau-Betriebe.",
  },
};

const faqItems = [
  {
    question: "Was ist AuditReady und für wen ist die Software gemacht?",
    answer:
      "AuditReady ist eine spezialisierte Cloud-Software für EN 1090-zertifizierte Metallbau- und Stahlbau-Betriebe im DACH-Raum.",
  },
  {
    question: "Wie lange dauert die Einrichtung des WPK-Systems in AuditReady?",
    answer:
      "Für einen typischen EXC2-Betrieb rechnen Sie mit 1–3 Stunden Einrichtungszeit.",
  },
  {
    question: "Unterstützt AuditReady EN 1090-2 und EN 1090-3?",
    answer:
      "Ja. Beim Einrichten wählen Sie EN 1090-2 (Stahl), EN 1090-3 (Aluminium) oder beide.",
  },
  {
    question: "Gibt es eine Mindestlaufzeit?",
    answer:
      "Nein. AuditReady ist monatlich kündbar. Keine Einrichtungsgebühren.",
  },
];

export default function HomePage() {
  return (
    <>
      <FAQSchema items={faqItems} />
      <HeroSection />
      <SocialProofBar />
      <PainPointsSection />
      <HowItWorksSection />
      <FeaturesGrid />
      <PricingPreview />
      <HomepageFAQ />
      <SEOContentSection />
      <CTASection />
    </>
  );
}
