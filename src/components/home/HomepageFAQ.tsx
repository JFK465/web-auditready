"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const faqItems = [
  {
    q: "Was ist AuditReady und für wen ist die Software gemacht?",
    a: "AuditReady ist eine spezialisierte Cloud-Software für EN 1090-zertifizierte Metallbau- und Stahlbau-Betriebe im DACH-Raum. Die Software digitalisiert das WPK-System, berechnet automatisch einen Compliance-Score und generiert druckfertige Audit-Pakete. Zielgruppe sind Betriebe mit 10–100 Mitarbeitern, die ihr WPK noch in Word, Excel oder Papierordnern führen.",
  },
  {
    q: "Muss ich besondere IT-Kenntnisse mitbringen?",
    a: "Nein. AuditReady ist eine browserbasierte Cloud-Software — Sie benötigen keine Installation, keine IT-Infrastruktur und keine Programmierkenntnisse. Die Einrichtung führt Sie Schritt für Schritt durch den Import Ihres bestehenden WPK-Systems. Erfahrungsgemäß dauert die Ersteinrichtung weniger als 2 Stunden.",
  },
  {
    q: "Wie lange dauert die Einrichtung des WPK-Systems in AuditReady?",
    a: "Für einen typischen EXC2-Betrieb mit 5–10 Schweißern, 10–20 WPS und einem vorhandenen WPK-Handbuch rechnen Sie mit 1–3 Stunden Einrichtungszeit. AuditReady bietet Import-Assistenten für Word- und Excel-Daten sowie vorgefertigte WPK-Kapitelvorlagen.",
  },
  {
    q: "Unterstützt AuditReady sowohl EN 1090-2 (Stahl) als auch EN 1090-3 (Aluminium)?",
    a: "Ja. Beim Einrichten Ihres Kontos wählen Sie Ihren Zertifizierungstyp: EN 1090-2, EN 1090-3 oder beide. Die Gap-Analyse, Compliance-Prüfungen und WPS-Vorlagen werden entsprechend angepasst.",
  },
  {
    q: "Wie sicher sind meine WPK-Daten in AuditReady?",
    a: "Alle Daten werden verschlüsselt übertragen (SSL/TLS) und auf DSGVO-konformen EU-Rechenzentren gespeichert. AuditReady ist nach DSGVO entwickelt — Ihre Daten werden niemals an Dritte weitergegeben. Tägliche automatische Backups.",
  },
  {
    q: "Welche Zertifizierungsstellen werden unterstützt?",
    a: "Das Audit-Paket von AuditReady ist an den Standardchecklisten der wichtigsten deutschen Zertifizierungsstellen orientiert: TÜV SÜD, TÜV Rheinland, DNV, SLV Halle, Metall-Zert, ZDH-Zert.",
  },
  {
    q: "Was passiert mit meinen Daten wenn ich kündige?",
    a: "Sie können alle Ihre Daten jederzeit als vollständiges ZIP-Archiv exportieren. Nach der Kündigung werden Ihre Daten gemäß DSGVO gelöscht. Ihre Daten gehören immer Ihnen.",
  },
  {
    q: "Gibt es eine Mindestlaufzeit oder Kündigungsfrist?",
    a: "Nein. AuditReady ist monatlich kündbar. Jahreszahlung wird mit 15% Rabatt angeboten, ist aber freiwillig. Keine versteckten Kosten, keine Einrichtungsgebühren.",
  },
];

export function HomepageFAQ() {
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
            <h2 className="heading-section">Häufige Fragen zu AuditReady</h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-2">
              {faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left font-medium py-4">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
