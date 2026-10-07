import type { Metadata } from "next";
import { getPageContent } from "@/lib/content/db";
import type { TentangKamiContent } from "@/lib/content/pages/tentang-kami";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getPageContent<TentangKamiContent>("tentang-kami");
  const seo = content?.seo;
  return {
    title:
      seo?.title ||
      "Tentang Kami - Profil Perusahaan | PT Niaga Jaminan Nusantara",
    description:
      seo?.description ||
      "Profil PT Niaga Jaminan Nusantara (NJN), didirikan oleh Dafinah Syafa Niaga dan Anta Rahmadan sejak tahun 2020. Solusi agen dan konsultan resmi Bank Garansi & Surety Bond terpercaya di Indonesia.",
    keywords: seo?.keywords || [
      "Tentang PT Niaga Jaminan Nusantara",
      "Profil NJN",
      "Dafinah Syafa Niaga",
      "Anta Rahmadan",
      "Agen Asuransi Bank Garansi",
      "Broker Penjaminan Proyek",
    ],
    alternates: {
      canonical: "https://www.niagajaminan.com/tentang-kami",
    },
    openGraph: {
      title:
        seo?.title || "Tentang Kami - Profil PT Niaga Jaminan Nusantara",
      description:
        seo?.description ||
        "Mitra terpercaya dalam menyediakan solusi jaminan dan perlindungan risiko bisnis di Indonesia sejak tahun 2020.",
      url: "https://www.niagajaminan.com/tentang-kami",
      siteName: "PT Niaga Jaminan Nusantara",
      locale: "id_ID",
      type: "website",
    },
  };
}

export default function TentangKamiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
