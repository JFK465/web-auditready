"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const tiers = [
  {
    name: "Starter",
    price: "79",
    description: "Für Schlossereien und Kleinstbetriebe mit 1–5 Schweißern",
    features: [
      "WPK-Cockpit",
      "Compliance-Score",
      "Bis zu 5 Schweißerzeugnisse",
      "Bis zu 20 WPS",
      "Gap-Analyse",
      "Audit-Paket-Generator",
      "1 Benutzer",
      "E-Mail-Support",
    ],
    cta: "Beta-Zugang sichern",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "149",
    description: "Für KMU mit 6–30 Schweißern, EXC2/EXC3",
    features: [
      "Alles aus Starter",
      "Unbegrenzte Schweißerzeugnisse",
      "Unbegrenzte WPS",
      "WPS-Abdeckungsmatrix",
      "EXC3-Modus",
      "Bis zu 10 Benutzer",
      "Rollenverwaltung",
      "Dokumenten-Archiv",
      "Ablauf-Erinnerungen",
      "Prioritärer Support",
    ],
    cta: "Beta-Zugang sichern",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Auf Anfrage",
    description: "Für Betriebe ab 30 Mitarbeitern, Mehrstandorte",
    features: [
      "Alles aus Professional",
      "Unbegrenzte Benutzer",
      "Mehrstandort-Verwaltung",
      "API-Zugang",
      "SSO/SAML",
      "Dedizierter Account Manager",
      "SLA",
    ],
    cta: "Demo anfragen",
    highlighted: false,
  },
];

export function PricingPreview() {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-4">
            <h2 className="heading-section">
              Wir sind in der Beta — testen Sie jetzt kostenlos
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Während der Beta-Phase ist AuditReady für alle registrierten
              Beta-Nutzer kostenlos. Beta-Nutzer erhalten 30% Rabatt auf das
              erste Jahr nach der Beta.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5">
              BETA-PHASE — Jetzt 0 EUR statt regulärem Preis
            </Badge>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <motion.div
                key={tier.name}
                variants={fadeInUp}
                className={`rounded-xl border p-8 flex flex-col ${
                  tier.highlighted
                    ? "border-primary shadow-lg scale-105 bg-card"
                    : "bg-card"
                }`}
              >
                {tier.highlighted && (
                  <Badge className="self-start mb-4 bg-primary text-primary-foreground">
                    Beliebt
                  </Badge>
                )}
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <div className="mb-2">
                  <span className="line-through text-muted-foreground text-sm">
                    {tier.price === "Auf Anfrage"
                      ? ""
                      : `${tier.price} EUR/Monat`}
                  </span>
                  <div className="text-2xl font-bold text-primary">
                    {tier.price === "Auf Anfrage"
                      ? "Auf Anfrage"
                      : "BETA: 0 EUR"}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-6">
                  {tier.description}
                </p>
                <ul className="space-y-2 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={tier.highlighted ? "default" : "outline"}
                  className={
                    tier.highlighted ? "bg-primary hover:bg-primary/90" : ""
                  }
                >
                  <Link
                    href={
                      tier.name === "Enterprise"
                        ? "/kontakt"
                        : "/wpk-software#beta-anmeldung"
                    }
                  >
                    {tier.cta}
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
