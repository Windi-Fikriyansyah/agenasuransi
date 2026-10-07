import type { MetadataRoute } from "next";
import { getArticles, getPageContent } from "@/lib/content/db";
import { settingsDefaults, type SettingsContent } from "@/lib/content/pages/settings";

export const revalidate = 3600; // revalidate sitemap at most every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const settings = await getPageContent<SettingsContent>("settings");
  let rawSiteUrl = settings?.seo?.siteUrl || settingsDefaults.seo.siteUrl || "https://www.niagajaminan.com";
  if (rawSiteUrl.includes("niagajaminannusantara.co.id")) {
    rawSiteUrl = "https://www.niagajaminan.com";
  }
  const siteUrl = rawSiteUrl.startsWith("http")
    ? rawSiteUrl.replace(/\/+$/, "")
    : `https://${rawSiteUrl.replace(/\/+$/, "")}`;

  const articles = await getArticles();

  const now = new Date();

  // Route statis utama website
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/tentang-kami`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/syarat-ketentuan`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/layanan-service`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/kontak-kami`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Route dinamis artikel blog
  const articleRoutes: MetadataRoute.Sitemap = (articles || []).map((article) => {
    let modDate = now;
    if (article.isoDate) {
      const parsed = new Date(article.isoDate);
      if (!isNaN(parsed.getTime())) {
        modDate = parsed;
      }
    }

    return {
      url: `${siteUrl}/blog/${article.slug}`,
      lastModified: modDate,
      changeFrequency: "weekly",
      priority: 0.7,
    };
  });

  return [...staticRoutes, ...articleRoutes];
}
