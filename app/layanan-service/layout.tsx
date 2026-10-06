import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produk & Layanan Kami - Bank Garansi, Surety Bond & Asuransi Proyek | PT Niaga Jaminan Nusantara",
  description:
    "Melayani berbagai kebutuhan jaminan dan asuransi untuk mendukung kesuksesan proyek dan bisnis Anda: Surety Bond, Bank Garansi Non-Collateral, Asuransi Konstruksi (CAR), Asuransi Umum (CGL), Professional Indemnity, Cargo & Engineering.",
  keywords: [
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
    canonical: "https://niagajaminannusantara.co.id/layanan-service",
  },
  openGraph: {
    title: "Produk & Layanan Kami | PT Niaga Jaminan Nusantara",
    description:
      "Melayani berbagai kebutuhan jaminan dan asuransi untuk mendukung kesuksesan proyek dan bisnis Anda: Surety Bond, Bank Garansi, CAR, CGL, Cargo, dan Asuransi Lainnya.",
    url: "https://niagajaminannusantara.co.id/layanan-service",
    siteName: "PT Niaga Jaminan Nusantara",
    locale: "id_ID",
    type: "website",
  },
};

export default function LayananLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
