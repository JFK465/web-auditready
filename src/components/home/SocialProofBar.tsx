"use client";

import { Shield, Flag, CheckCircle2, Gift } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "DSGVO-konform" },
  { icon: Flag, label: "Made in Germany" },
  { icon: CheckCircle2, label: "EN 1090-1 konform" },
  { icon: Gift, label: "Kostenlos testen" },
];

export function SocialProofBar() {
  return (
    <section className="py-8 bg-muted/50 border-y">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <item.icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
