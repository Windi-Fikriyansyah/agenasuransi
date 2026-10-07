import type { Metadata } from "next";
import { getPageContent } from "@/lib/content/db";
import type { KontakContent } from "@/lib/content/pages/kontak";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getPageContent<KontakContent>("kontak");
  const seo = content?.seo;
  return {
    title:
      seo?.title ||
      "Kontak Kami - Konsultasi Bank Garansi & Surety Bond | PT Niaga Jaminan Nusantara",
    description:
      seo?.description ||
      "Hubungi PT Niaga Jaminan Nusantara untuk konsultasi gratis penerbitan Bank Garansi & Surety Bond tanpa agunan (non-collateral).",
    keywords: seo?.keywords || [
      "Kontak Bank Garansi",
      "Konsultasi Surety Bond",
      "PT Niaga Jaminan Nusantara",
      "Kantor PT Niaga Jaminan Nusantara",
      "Alamat Graha Surveyor Indonesia",
      "WhatsApp Bank Garansi",
    ],
    alternates: {
      canonical: "https://www.niagajaminan.com/kontak-kami",
    },
    openGraph: {
      title:
        seo?.title ||
        "Kontak Kami - Konsultasi Bank Garansi & Surety Bond | PT Niaga Jaminan Nusantara",
      description:
        seo?.description ||
        "Hubungi konsultan resmi kami untuk penerbitan Bank Garansi & Surety Bond cepat tanpa agunan di seluruh Indonesia.",
      url: "https://www.niagajaminan.com/kontak-kami",
      siteName: "PT Niaga Jaminan Nusantara",
      locale: "id_ID",
      type: "website",
    },
  };
}

export default function KontakLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
