import { siteConfig } from "@/lib/seo-config";

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

function buildEntries(): SitemapEntry[] {
  const base = siteConfig.url;

  return [
    {
      url: `${base}/`,
      lastmod: new Date().toISOString(),
      priority: 1.0,
      changefreq: "weekly",
    },
    {
      url: `${base}/wpk-software`,
      lastmod: new Date().toISOString(),
      priority: 0.9,
      changefreq: "weekly",
    },
    {
      url: `${base}/funktionen`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
      changefreq: "monthly",
    },
    {
      url: `${base}/preise`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
      changefreq: "monthly",
    },
    // Branchen
    {
      url: `${base}/schlosserei-metallbau`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
      changefreq: "monthly",
    },
    {
      url: `${base}/stahlbau-mittelstand`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
      changefreq: "monthly",
    },
    {
      url: `${base}/treppenbau-gelaenderbau`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
      changefreq: "monthly",
    },
    {
      url: `${base}/aluminium-fassadenbau`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
      changefreq: "monthly",
    },
    {
      url: `${base}/subunternehmer-stahlbau`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
      changefreq: "monthly",
    },
    // Wissen
    {
      url: `${base}/wissen`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
      changefreq: "monthly",
    },
    {
      url: `${base}/wissen/din-en-1090-1`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
      changefreq: "monthly",
    },
    {
      url: `${base}/wissen/ausführungsklassen`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
      changefreq: "monthly",
    },
    {
      url: `${base}/wissen/wpk-handbuch`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
      changefreq: "monthly",
    },
    {
      url: `${base}/wissen/schweisskoordinator`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
      changefreq: "monthly",
    },
    {
      url: `${base}/wissen/überwachungsaudit`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
      changefreq: "monthly",
    },
    // Tools
    {
      url: `${base}/tools/audit-bereitschafts-check`,
      lastmod: new Date().toISOString(),
      priority: 0.6,
      changefreq: "monthly",
    },
    // Blog
    {
      url: `${base}/blog`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
      changefreq: "weekly",
    },
    {
      url: `${base}/blog/en-1090-überwachungsaudit-checkliste`,
      lastmod: new Date().toISOString(),
      priority: 0.6,
      changefreq: "monthly",
    },
    {
      url: `${base}/blog/wpk-handbuch-en-1090-inhalt`,
      lastmod: new Date().toISOString(),
      priority: 0.6,
      changefreq: "monthly",
    },
    {
      url: `${base}/blog/schweisserzeugnisse-ablaufen-en-1090`,
      lastmod: new Date().toISOString(),
      priority: 0.6,
      changefreq: "monthly",
    },
    {
      url: `${base}/blog/wpk-digital-vs-papier-metallbau`,
      lastmod: new Date().toISOString(),
      priority: 0.6,
      changefreq: "monthly",
    },
    {
      url: `${base}/blog/erstmalige-en-1090-zertifizierung`,
      lastmod: new Date().toISOString(),
      priority: 0.6,
      changefreq: "monthly",
    },
  ];
}

function toXml(entries: SitemapEntry[]): string {
  const urls = entries
    .map(
      (e) => `  <url>
    <loc>${e.url}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export function GET() {
  const entries = buildEntries();
  const xml = toXml(entries);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
