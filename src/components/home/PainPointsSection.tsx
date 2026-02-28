"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Clock,
  XCircle,
  FileX,
  TrendingDown,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const pains = [
  {
    icon: AlertTriangle,
    title: "Panik vor dem Audit",
    description:
      "Das Überwachungsaudit kommt — und das WPK-Handbuch liegt seit Jahren unberührt im Ordner. Drei Tage Hektik statt drei Klicks.",
  },
  {
    icon: Clock,
    title: "Tagelange Dokumenten-Suche",
    description:
      "WPS liegen in einem Ordner, Materialnachweise im nächsten, Schweißerzeugnisse auf dem Desktop des Buchhalters. Das komplette Audit-Paket zusammenstellen dauert Tage.",
  },
  {
    icon: XCircle,
    title: "Abgelaufene Schweißerzeugnisse",
    description:
      "ISO 9606-1-Zeugnisse müssen alle 2 Jahre verlängert werden. Im hektischen Betriebsalltag laufen sie unbemerkt ab — und der Auditor findet sie als ersten Mangel.",
  },
  {
    icon: FileX,
    title: "WPS-Lücken unbemerkt",
    description:
      "Neue Verfahren, neue Werkstoffe, neue Positionen — aber kein Update der WPS-Abdeckung. Die WPQR-Deckungsrechnung stimmt nicht mehr. Klassischer Audit-Befund.",
  },
  {
    icon: TrendingDown,
    title: "Risiko des Zertifikatsentzugs",
    description:
      "Ohne gültiges EN 1090-Zertifikat kein Auftrag. Nachaudits kosten Zeit, Geld und Nerven. Im schlimmsten Fall wird das Zertifikat ausgesetzt.",
  },
];

export function PainPointsSection() {
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
            <h2 className="heading-section text-balance">
              Kennen Sie das kurz vor dem Überwachungsaudit?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Tausende von EN 1090-Betrieben stehen jährlich vor denselben
              Problemen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pains.map((pain) => (
              <motion.div
                key={pain.title}
                variants={fadeInUp}
                className="border rounded-xl p-6 bg-card hover:shadow-md transition-shadow"
              >
                <pain.icon className="h-8 w-8 text-destructive mb-4" />
                <h3 className="font-semibold text-lg mb-2">{pain.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pain.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
