"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="heading-section mb-4">
            Starten Sie heute — bevor das nächste Audit kommt
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-primary-foreground/80 text-lg mb-8"
          >
            AuditReady einrichten dauert weniger als 2 Stunden. Das nächste
            Überwachungsaudit könnte früher kommen als erwartet.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 h-12 px-8"
              asChild
            >
              <Link href="/wpk-software#beta-anmeldung">
                Kostenlos registrieren
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8"
              asChild
            >
              <Link href="/tools/audit-bereitschafts-check">
                Compliance-Check starten
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
