import type { Metadata } from "next";
import { getPageContent } from "@/lib/content/db";
import type { SyaratKetentuanContent } from "@/lib/content/pages/syarat-ketentuan";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getPageContent<SyaratKetentuanContent>(
    "syarat-ketentuan"
  );
  const seo = content?.seo;
  return {
    title:
      seo?.title ||
      "Syarat & Ketentuan Penerbitan Bank Garansi dan Surety Bond | PT Niaga Jaminan Nusantara",
    description:
      seo?.description ||
      "Persyaratan lengkap penerbitan Bank Garansi dan Surety Bond PT Niaga Jaminan Nusantara.",
    keywords: seo?.keywords || [
      "Syarat Bank Garansi",
      "Persyaratan Surety Bond",
      "Syarat Bid Bond",
      "Syarat Performance Bond",
      "PT Niaga Jaminan Nusantara",
    ],
    alternates: {
      canonical: "https://www.niagajaminan.com/syarat-ketentuan",
    },
    openGraph: {
      title:
        seo?.title ||
        "Syarat & Ketentuan Penerbitan Bank Garansi & Surety Bond",
      description:
        seo?.description ||
        "Panduan dan checklist persyaratan lengkap penerbitan Bank Garansi dan Surety Bond dari PT Niaga Jaminan Nusantara.",
      url: "https://www.niagajaminan.com/syarat-ketentuan",
      siteName: "PT Niaga Jaminan Nusantara",
      locale: "id_ID",
      type: "website",
    },
  };
}

export default function SyaratKetentuanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
