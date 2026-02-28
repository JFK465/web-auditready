import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: "weekly",
    },
    {
      url: `${base}/wpk-software`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: `${base}/funktionen`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/preise`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/kontakt`,
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: "monthly",
    },
    // Branchen
    {
      url: `${base}/schlosserei-metallbau`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/stahlbau-mittelstand`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/treppenbau-gelaenderbau`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/aluminium-fassadenbau`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/subunternehmer-stahlbau`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    // Wissen
    {
      url: `${base}/wissen`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/wissen/din-en-1090-1`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/wissen/ausfuehrungsklassen`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/wissen/wpk-handbuch`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/wissen/schweisskoordinator`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/wissen/ueberwachungsaudit`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    // Tools
    {
      url: `${base}/tools/audit-bereitschafts-check`,
      lastModified: new Date(),
      priority: 0.6,
      changeFrequency: "monthly",
    },
    // Blog
    {
      url: `${base}/blog`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "weekly",
    },
    {
      url: `${base}/blog/en-1090-ueberwachungsaudit-checkliste`,
      lastModified: new Date(),
      priority: 0.6,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/blog/wpk-handbuch-en-1090-inhalt`,
      lastModified: new Date(),
      priority: 0.6,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/blog/schweisserzeugnisse-ablaufen-en-1090`,
      lastModified: new Date(),
      priority: 0.6,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/blog/wpk-digital-vs-papier-metallbau`,
      lastModified: new Date(),
      priority: 0.6,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/blog/erstmalige-en-1090-zertifizierung`,
      lastModified: new Date(),
      priority: 0.6,
      changeFrequency: "monthly",
    },
    // Legal
    {
      url: `${base}/datenschutz`,
      lastModified: new Date(),
      priority: 0.3,
      changeFrequency: "yearly",
    },
    {
      url: `${base}/impressum`,
      lastModified: new Date(),
      priority: 0.3,
      changeFrequency: "yearly",
    },
    {
      url: `${base}/agb`,
      lastModified: new Date(),
      priority: 0.3,
      changeFrequency: "yearly",
    },
  ];
}
