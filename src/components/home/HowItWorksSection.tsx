"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const steps = [
  {
    number: 1,
    title: "WPK digitalisieren",
    description:
      "Importieren Sie Ihr bestehendes WPK-Handbuch, tragen Sie Schweißerzeugnisse, WPS und Materialnachweise ein. Einmalige Einrichtung in weniger als 2 Stunden.",
  },
  {
    number: 2,
    title: "Compliance-Score prüfen",
    description:
      "AuditReady analysiert Ihr WPK-System automatisch und zeigt Ihnen einen Compliance-Score von 0–100%. Gap-Analyse listet alle offenen Punkte mit Handlungsempfehlungen.",
  },
  {
    number: 3,
    title: "Audit-Paket generieren",
    description:
      'Wenn das Audit ansteht: Ein Klick auf "Audit-Paket generieren" erstellt ein druckfertiges Dokument für TÜV, DNV, SLV oder Metall-Zert.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="heading-section">
              In 3 Schritten immer audit-bereit
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              AuditReady führt Sie einmalig durch die Einrichtung — danach läuft
              das System automatisch.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
