"use client";

import { motion } from "framer-motion";
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
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const features = [
  {
    icon: Gauge,
    title: "WPK-Cockpit",
    description:
      "Alle WPK-relevanten Daten in einem zentralen Dashboard. Status auf einen Blick — für Geschäftsführer und Schweißkoordinator.",
  },
  {
    icon: TrendingUp,
    title: "Compliance-Score (0–100%)",
    description:
      "Automatisch berechneter Compliance-Wert, der tagesaktuell Ihren Audit-Bereitschaftsstand anzeigt. Ampel-System: grün, gelb, rot.",
  },
  {
    icon: Search,
    title: "Gap-Analyse",
    description:
      "Automatische Erkennung von Compliance-Lücken: fehlende Dokumente, abgelaufene Zeugnisse, ungedeckte WPS-Bereiche.",
  },
  {
    icon: Bell,
    title: "Ablauf-Erinnerungen",
    description:
      "Automatische E-Mail-Erinnerungen 60 und 30 Tage vor Ablauf von Schweißerzeugnissen, WPS-Gültigkeit und Revisionsfristen.",
  },
  {
    icon: FileDown,
    title: "Audit-Paket-Generator",
    description:
      "Ein Klick — druckfertiges PDF-Paket mit WPK-Handbuch, Nachweisliste und Inhaltsverzeichnis. Kompatibel mit TÜV, DNV, Metall-Zert und SLV.",
  },
  {
    icon: CheckSquare,
    title: "WPS-Abdeckungscheck",
    description:
      "Visualisierung welche Verfahren, Werkstoffgruppen und Positionen durch gültige WPQR abgedeckt sind — und wo Lücken bestehen.",
  },
  {
    icon: Users,
    title: "Schweißerzeugnisse-Manager",
    description:
      "Alle ISO 9606-1-Zeugnisse aller Schweißer mit Ablaufdatum, Verfahren und Position. Übersicht und Erinnerungen in einem System.",
  },
  {
    icon: Archive,
    title: "Dokumenten-Archiv",
    description:
      "EN 10204-Materialnachweise, ZfP-Protokolle, Erstprüfungsberichte — alles durchsuchbar, versioniert und jederzeit abrufbar.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="heading-section">
              Alle Werkzeuge für Ihre EN 1090-Compliance
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              AuditReady ist die erste spezialisierte WPK-Software für
              Metallbau-Betriebe im DACH-Raum.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="bg-card border rounded-xl p-6 hover:shadow-md transition-shadow group"
              >
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-10">
            <Link
              href="/funktionen"
              className="text-primary hover:underline font-medium inline-flex items-center gap-1"
            >
              Alle Funktionen im Detail →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
