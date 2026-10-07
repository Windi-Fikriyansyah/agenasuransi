import type { MetadataRoute } from "next";
import { getPageContent } from "@/lib/content/db";
import { settingsDefaults, type SettingsContent } from "@/lib/content/pages/settings";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const settings = await getPageContent<SettingsContent>("settings");
  const rawSiteUrl = settings?.seo?.siteUrl || settingsDefaults.seo.siteUrl;
  const siteUrl = rawSiteUrl.startsWith("http")
    ? rawSiteUrl.replace(/\/+$/, "")
    : `https://${rawSiteUrl.replace(/\/+$/, "")}`;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/cms",
          "/cms/*",
          "/api/*",
          "/_next/*",
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
