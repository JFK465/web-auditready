import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BlogCard } from "@/components/blog/BlogCard";
import { getBlogPosts } from "@/lib/blog";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog – AuditReady | EN 1090 Wissen für Metallbau-Betriebe",
  description:
    "Praxiswissen zu EN 1090, WPK, Schweisserzeugnissen und Audit-Vorbereitung für Metallbau-Betriebe im DACH-Raum. Regelmässig neue Artikel.",
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: "Blog – AuditReady | EN 1090 Wissen für Metallbau-Betriebe",
    description:
      "Praxiswissen zu EN 1090, WPK und Audit-Vorbereitung für Metallbau-Betriebe.",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      <WebPageSchema
        title="Blog – AuditReady | EN 1090 Wissen für Metallbau-Betriebe"
        description="Praxiswissen zu EN 1090, WPK und Audit-Vorbereitung."
        url="/blog"
      />
      <BreadcrumbSchema items={[{ label: "Blog", href: "/blog" }]} />

      <div className="container-custom py-4">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
      </div>

      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <h1 className="heading-hero mb-4 max-w-3xl">
            EN 1090 Wissen für Metallbau-Betriebe
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Praxisorientierte Artikel zu EN 1090, WPK, Schweisserzeugnissen und
            Audit-Vorbereitung — für Geschäftsführer und Schweisskoordinatoren
            im DACH-Raum.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16">
        <div className="container-custom">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold mb-4">Bald verfügbar</h2>
              <p className="text-muted-foreground mb-8">
                Wir arbeiten an praxisorientierten Artikeln zu EN 1090 und WPK.
                Melden Sie sich für unseren Newsletter an, um als Erster
                informiert zu werden.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-muted/30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-background border border-border rounded-xl p-8">
            <div>
              <h2 className="font-bold text-xl mb-2">
                Wissen in die Praxis umsetzen
              </h2>
              <p className="text-muted-foreground">
                Testen Sie Ihre aktuelle Audit-Bereitschaft mit unserem
                kostenlosen EN 1090 Compliance-Check.
              </p>
            </div>
            <Button asChild className="flex-shrink-0">
              <Link href="/tools/audit-bereitschafts-check">
                Compliance-Check starten
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
