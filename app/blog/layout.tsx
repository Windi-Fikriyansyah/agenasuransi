import type { Metadata } from "next";
import { getPageContent } from "@/lib/content/db";
import type { BlogIndexContent } from "@/lib/content/pages/blog-index";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getPageContent<BlogIndexContent>("blog-index");
  const seo = content?.seo;
  return {
    title:
      seo?.title ||
      "Blog & Edukasi Penjaminan Proyek | PT Niaga Jaminan Nusantara",
    description:
      seo?.description ||
      "Kumpulan artikel, edukasi, panduan tender LPSE/LKPP, regulasi OJK, serta tips praktis penerbitan Bank Garansi & Surety Bond tanpa agunan di Indonesia.",
    keywords: seo?.keywords || [
      "Blog Penjaminan",
      "Bank Garansi",
      "Surety Bond",
      "Tender LPSE",
      "Tips Tender Proyek",
      "PT Niaga Jaminan Nusantara",
    ],
    alternates: {
      canonical: "https://niagajaminannusantara.co.id/blog",
    },
    openGraph: {
      title:
        seo?.title ||
        "Blog & Edukasi Penjaminan Proyek | PT Niaga Jaminan Nusantara",
      description:
        seo?.description ||
        "Kumpulan artikel, edukasi, dan panduan praktis penerbitan Bank Garansi & Surety Bond dari PT Niaga Jaminan Nusantara.",
      url: "https://niagajaminannusantara.co.id/blog",
      siteName: "PT Niaga Jaminan Nusantara",
      locale: "id_ID",
      type: "website",
    },
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
