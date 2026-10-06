import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak Kami - Konsultasi Bank Garansi & Surety Bond | PT Niaga Jaminan Nusantara",
  description:
    "Hubungi PT Niaga Jaminan Nusantara untuk konsultasi gratis penerbitan Bank Garansi & Surety Bond tanpa agunan (non-collateral). Kantor di Graha Surveyor Indonesia Lt. 15, Jakarta Selatan. WhatsApp: 0821-1318-9343.",
  keywords: [
    "Kontak Bank Garansi",
    "Konsultasi Surety Bond",
    "PT Niaga Jaminan Nusantara",
    "Kantor PT Niaga Jaminan Nusantara",
    "Alamat Graha Surveyor Indonesia",
    "WhatsApp Bank Garansi",
    "Agen Asuransi Tender Proyek",
    "Jasa Bank Garansi Jakarta",
  ],
  alternates: {
    canonical: "https://niagajaminannusantara.co.id/kontak-kami",
  },
  openGraph: {
    title: "Kontak Kami - Konsultasi Bank Garansi & Surety Bond | PT Niaga Jaminan Nusantara",
    description:
      "Hubungi konsultan resmi kami untuk penerbitan Bank Garansi & Surety Bond cepat tanpa agunan di seluruh Indonesia. Respon cepat via WhatsApp 0821-1318-9343.",
    url: "https://niagajaminannusantara.co.id/kontak-kami",
    siteName: "PT Niaga Jaminan Nusantara",
    locale: "id_ID",
    type: "website",
  },
};

export default function KontakLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
