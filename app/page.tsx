import type { Metadata } from "next";
import { getPageContent } from "@/lib/content/db";
import type { HomeContent } from "@/lib/content/pages/home";
import type { SettingsContent } from "@/lib/content/pages/settings";
import HomePageClient from "./HomePageClient";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getPageContent<HomeContent>("home");
  const seo = content?.seo;
  return {
    title:
      seo?.title ||
      "Jasa Bank Garansi & Surety Bond Terpercaya | PT Niaga Jaminan Nusantara",
    description:
      seo?.description ||
      "Layanan penerbitan Bank Garansi & Surety Bond resmi OJK di Indonesia. Proses cepat, mudah, tanpa agunan (Non Collateral). Hubungi PT Niaga Jaminan Nusantara.",
    keywords: seo?.keywords,
  };
}

export default async function Page() {
  const [content, settings] = await Promise.all([
    getPageContent<HomeContent>("home"),
    getPageContent<SettingsContent>("settings"),
  ]);

  return <HomePageClient content={content} settings={settings} />;
}
