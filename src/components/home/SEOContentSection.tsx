import Link from "next/link";

export function SEOContentSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto prose prose-stone">
          <h2 className="heading-sub text-center mb-8">
            Digitale WPK-Compliance für EN 1090-Betriebe im DACH-Raum
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Die Werkseigene Produktionskontrolle (WPK) ist das Herzstück jeder
            EN 1090-Zertifizierung. Seit dem 1. Juli 2014 ist die
            CE-Kennzeichnung für tragende Stahlbauteile in der EU gesetzlich
            verpflichtend — und ohne ein gepflegtes WPK-System nach DIN EN
            1090-1 ist diese Kennzeichnung nicht aufrechtzuerhalten.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            In der Praxis führen die meisten der über 8.600 EN
            1090-zertifizierten Metallbau-Betriebe in Deutschland ihr WPK-System
            noch in Word-Dokumenten, Excel-Listen und physischen Ordnern. Das
            Ergebnis: Jedes Überwachungsaudit beginnt mit einer mehrtägigen
            Suche nach aktuellen Dokumenten — und endet häufig mit
            Mängelprotokollen für abgelaufene{" "}
            <Link
              href="/wissen/wpk-handbuch"
              className="text-primary hover:underline"
            >
              Schweißerzeugnisse
            </Link>
            , veraltete{" "}
            <Link href="/funktionen" className="text-primary hover:underline">
              WPS-Abdeckung
            </Link>{" "}
            oder unvollständige Personalqualifikationsnachweise.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            AuditReady ist das erste spezialisierte WPK-Cockpit für Metallbau-
            und Stahlbau-Betriebe im DACH-Raum. Die Software digitalisiert das
            gesamte WPK-System, berechnet tagesaktuell einen Compliance-Score
            und generiert auf Knopfdruck ein druckfertiges Audit-Paket für TÜV,
            DNV, SLV, Metall-Zert und ZDH-Zert. Automatische Ablauf-Erinnerungen
            stellen sicher, dass{" "}
            <Link
              href="/blog/schweisserzeugnisse-ablaufen-en-1090"
              className="text-primary hover:underline"
            >
              ISO 9606-1-Schweißerzeugnisse
            </Link>{" "}
            nie unbemerkt ablaufen.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Ob{" "}
            <Link
              href="/schlosserei-metallbau"
              className="text-primary hover:underline"
            >
              Schlosserei mit 10 Mitarbeitern
            </Link>
            ,{" "}
            <Link
              href="/stahlbau-mittelstand"
              className="text-primary hover:underline"
            >
              Stahlbau-Unternehmen mit EXC3-Anforderungen
            </Link>
            ,{" "}
            <Link
              href="/treppenbau-gelaenderbau"
              className="text-primary hover:underline"
            >
              Treppenbauer mit hoher WPS-Variantenzahl
            </Link>{" "}
            oder{" "}
            <Link
              href="/subunternehmer-stahlbau"
              className="text-primary hover:underline"
            >
              Subunternehmer, der kurzfristig Compliance-Nachweise liefern muss
            </Link>{" "}
            — AuditReady skaliert mit Ihrem Betrieb.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Erfahren Sie mehr über die{" "}
            <Link
              href="/wissen/ausfuehrungsklassen"
              className="text-primary hover:underline"
            >
              Ausführungsklassen EXC1 bis EXC4
            </Link>
            , die{" "}
            <Link
              href="/wissen/wpk-handbuch"
              className="text-primary hover:underline"
            >
              Anforderungen an das WPK-Handbuch
            </Link>{" "}
            und den{" "}
            <Link
              href="/wissen/ueberwachungsaudit"
              className="text-primary hover:underline"
            >
              Ablauf des EN 1090-Überwachungsaudits
            </Link>{" "}
            — oder testen Sie direkt mit dem kostenlosen{" "}
            <Link
              href="/tools/audit-bereitschafts-check"
              className="text-primary hover:underline"
            >
              Audit-Bereitschafts-Check
            </Link>
            , wo Ihr Betrieb heute steht.
          </p>
        </div>
      </div>
    </section>
  );
}
