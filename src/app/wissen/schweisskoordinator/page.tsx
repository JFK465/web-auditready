import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Schweisskoordinator nach ISO 14731: Pflichten, Qualifikation und Nachweis",
  description:
    "Welche Pflichten hat der Schweisskoordinator nach ISO 14731? Qualifikationen (EWE, IWE, SFI), Nachweispflichten und Dokumentation im WPK erklärt.",
  alternates: { canonical: `${siteConfig.url}/wissen/schweisskoordinator` },
  openGraph: {
    title: "Schweisskoordinator nach ISO 14731: Pflichten und Qualifikation",
    description:
      "Leitfaden zum Schweisskoordinator nach ISO 14731 für EN 1090-zertifizierte Betriebe.",
    url: `${siteConfig.url}/wissen/schweisskoordinator`,
  },
};

const qualifikationen = [
  {
    kuerzel: "EWT",
    name: "Europäischer Schweisstechniker",
    niveau: "Basis",
    anwendung: "EXC1–EXC2 (einfache Konstruktionen)",
  },
  {
    kuerzel: "EWS / SFI",
    name: "Europäischer Schweissfachmann / Schweissaufsichtsperson",
    niveau: "Mittel",
    anwendung: "EXC2 (Standard-Metallbau)",
  },
  {
    kuerzel: "EWE / IWE",
    name: "Europäischer Schweisstechniker / Internationaler Schweissingenieur",
    niveau: "Hoch",
    anwendung: "EXC3–EXC4 (komplexe Tragwerke)",
  },
];

export default function SchweisskoordinatorPage() {
  return (
    <>
      <WebPageSchema
        title="Schweisskoordinator nach ISO 14731: Pflichten, Qualifikation und Nachweis"
        description="Leitfaden zum Schweisskoordinator nach ISO 14731 für EN 1090-Betriebe."
        url="/wissen/schweisskoordinator"
      />
      <BreadcrumbSchema
        items={[
          { label: "Wissen", href: "/wissen" },
          { label: "Schweisskoordinator", href: "/wissen/schweisskoordinator" },
        ]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            { label: "Wissen", href: "/wissen" },
            {
              label: "Schweisskoordinator",
              href: "/wissen/schweisskoordinator",
            },
          ]}
        />
      </div>

      <article className="py-16">
        <div className="container-custom max-w-3xl">
          <div className="mb-10">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium text-xs">
                Personal
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> 8 Minuten Lesezeit
              </span>
            </div>
            <h1 className="heading-hero mb-4">
              Schweisskoordinator nach ISO 14731: Pflichten, Qualifikation und
              Nachweis
            </h1>
            <p className="text-xl text-muted-foreground">
              Der Schweisskoordinator ist eine der wichtigsten Anforderungen in
              der EN 1090-Zertifizierung. Dieser Leitfaden erklärt alle
              Qualifikationsstufen, Aufgaben und Dokumentationspflichten.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">
                1. Was ist die Schweissaufsicht nach ISO 14731?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                ISO 14731 &quot;Schweissaufsicht — Aufgaben und
                Verantwortlichkeiten&quot; definiert die Anforderungen an
                Personen, die Schweissaufgaben in der Produktion beaufsichtigen.
                In der EN 1090-Zertifizierung ist der Schweisskoordinator (auch
                Schweissaufsicht genannt) eine Pflichtfunktion — ab
                Ausführungsklasse EXC2.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                2. Qualifikationsstufen nach ISO 14731
              </h2>
              <div className="space-y-4">
                {qualifikationen.map((q) => (
                  <div
                    key={q.kuerzel}
                    className="bg-muted/30 rounded-lg p-4 border border-border"
                  >
                    <div className="flex items-start gap-3">
                      <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded flex-shrink-0">
                        {q.kuerzel}
                      </span>
                      <div>
                        <div className="font-semibold mb-1">{q.name}</div>
                        <div className="text-sm text-muted-foreground">
                          Niveau: {q.niveau} — Anwendung: {q.anwendung}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. Ab wann ist eine Schweissaufsicht Pflicht?
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-background rounded-xl border border-border overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="text-left p-3 font-semibold">
                        Ausführungsklasse
                      </th>
                      <th className="text-left p-3 font-semibold">Pflicht?</th>
                      <th className="text-left p-3 font-semibold">
                        Mindest-Qualifikation
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["EXC1", "Nein", "—"],
                      ["EXC2", "Ja", "EWS / SFI"],
                      ["EXC3", "Ja", "IWE / EWT"],
                      ["EXC4", "Ja (Vollzeit)", "IWE"],
                    ].map(([exc, pflicht, qual]) => (
                      <tr key={exc} className="border-t border-border">
                        <td className="p-3 font-medium text-primary">{exc}</td>
                        <td className="p-3 text-muted-foreground">{pflicht}</td>
                        <td className="p-3 text-muted-foreground">{qual}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. Aufgaben des Schweisskoordinators im Betrieb
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nach ISO 14731 umfassen die typischen Aufgaben:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
                <li>Prüfung und Freigabe von WPS (Schweissanweisungen)</li>
                <li>
                  Überwachung der Schweissarbeiten und Qualifikation der
                  Schweisser
                </li>
                <li>Prüfplanung und Dokumentation der ZfP-Ergebnisse</li>
                <li>Pflege und Aktualisierung des WPK-Handbuchs</li>
                <li>Ansprechpartner für die notifizierte Stelle bei Audits</li>
                <li>Freigabe von Materialien und Kontrollmassnahmen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                5. Was passiert wenn die Schweissaufsicht nicht nachgewiesen
                wird?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Fehlt der Nachweis einer qualifizierten Schweissaufsicht beim
                Überwachungsaudit, ist dies ein schwerwiegender Mangelbefund —
                in der Regel Kategorie &quot;Major&quot;. Dies kann zu einem
                Nachaudit führen und im schlimmsten Fall zur Aussetzung des EN
                1090-Zertifikats.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                6. Wechsel des Schweisskoordinators — Was ändert sich?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Bei Wechsel des Schweisskoordinators muss das WPK-Handbuch
                umgehend aktualisiert werden: Name, neue Qualifikation, Datum
                des Wechsels. Zusätzlich muss die notifizierte Stelle über den
                Wechsel informiert werden — manche Zertifizierungsstellen
                fordern eine Zwischenbegehung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                7. Wie AuditReady bei der Schweisskoordinator-Dokumentation
                hilft
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                AuditReady speichert den Schweisskoordinator mit Name,
                Qualifikationsnachweis und Gültigkeitsdatum. Bei einem Wechsel
                wird das System automatisch aktualisiert und der
                Gap-Analyse-Bericht angepasst. Die Qualifikationsprüfung nach
                Ausführungsklasse erfolgt automatisch — wenn die Qualifikation
                nicht ausreicht, zeigt die Gap-Analyse den Mangel sofort an.
              </p>
              <div className="mt-6">
                <Button asChild>
                  <Link href="/wpk-software#beta-anmeldung">
                    Schweisskoordinator in AuditReady verwalten
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-semibold mb-4">Weiterführende Artikel</h3>
            <div className="flex flex-wrap gap-3">
              {[
                {
                  label: "WPK-Handbuch Leitfaden",
                  href: "/wissen/wpk-handbuch",
                },
                {
                  label: "Überwachungsaudit",
                  href: "/wissen/überwachungsaudit",
                },
                { label: "DIN EN 1090-1", href: "/wissen/din-en-1090-1" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary border border-primary/30 px-3 py-1.5 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
