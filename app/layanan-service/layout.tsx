import type { Metadata } from "next";
import { getPageContent } from "@/lib/content/db";
import type { LayananContent } from "@/lib/content/pages/layanan";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getPageContent<LayananContent>("layanan");
  const seo = content?.seo;
  return {
    title:
      seo?.title ||
      "Produk & Layanan Kami - Bank Garansi, Surety Bond & Asuransi Proyek | PT Niaga Jaminan Nusantara",
    description:
      seo?.description ||
      "Melayani berbagai kebutuhan jaminan dan asuransi untuk mendukung kesuksesan proyek dan bisnis Anda: Surety Bond, Bank Garansi Non-Collateral, Asuransi Konstruksi (CAR), Asuransi Umum (CGL), Professional Indemnity, Cargo & Engineering.",
    keywords: seo?.keywords || [
      "Produk dan Layanan",
      "Surety Bond",
      "Bank Garansi",
      "Bid Bond",
      "Performance Bond",
      "Advance Payment Bond",
      "Maintenance Bond",
      "Bank Garansi Non-Collateral",
      "Asuransi Konstruksi CAR",
      "Commercial General Liability CGL",
      "Professional Indemnity",
      "Marine Cargo Insurance",
      "Engineering Insurance",
      "PT Niaga Jaminan Nusantara",
    ],
    alternates: {
      canonical: "https://www.niagajaminan.com/layanan-service",
    },
    openGraph: {
      title:
        seo?.title ||
        "Produk & Layanan Kami | PT Niaga Jaminan Nusantara",
      description:
        seo?.description ||
        "Melayani berbagai kebutuhan jaminan dan asuransi untuk mendukung kesuksesan proyek dan bisnis Anda.",
      url: "https://www.niagajaminan.com/layanan-service",
      siteName: "PT Niaga Jaminan Nusantara",
      locale: "id_ID",
      type: "website",
    },
  };
}

export default function LayananLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
