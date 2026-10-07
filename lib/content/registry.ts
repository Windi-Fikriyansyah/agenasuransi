import { settingsDefaults, settingsSchema, type SettingsContent } from "./pages/settings";
import { homeDefaults, homeSchema, type HomeContent } from "./pages/home";
import { tentangKamiDefaults, tentangKamiSchema, type TentangKamiContent } from "./pages/tentang-kami";
import { layananDefaults, layananSchema, type LayananContent } from "./pages/layanan";
import { kontakDefaults, kontakSchema, type KontakContent } from "./pages/kontak";
import { syaratKetentuanDefaults, syaratKetentuanSchema, type SyaratKetentuanContent } from "./pages/syarat-ketentuan";
import { blogIndexDefaults, blogIndexSchema, type BlogIndexContent } from "./pages/blog-index";
import type { PageSchema } from "./schema-types";

export interface PageDefinition<T = any> {
  id: string;
  title: string;
  description: string;
  route: string;
  schema: PageSchema;
  defaults: T;
}

export const PAGE_REGISTRY: Record<string, PageDefinition> = {
  settings: {
    id: "settings",
    title: "Pengaturan Global",
    description: "Kontak WhatsApp, telepon, email, alamat kantor, navbar, footer, dan form modal.",
    route: "/",
    schema: settingsSchema,
    defaults: settingsDefaults,
  },
  home: {
    id: "home",
    title: "Halaman Beranda",
    description: "Hero section, penjelasan surety bond, pilar keunggulan, produk penjaminan, dan sektor industri.",
    route: "/",
    schema: homeSchema,
    defaults: homeDefaults,
  },
  "tentang-kami": {
    id: "tentang-kami",
    title: "Tentang Kami",
    description: "Profil perusahaan, pendiri, sejarah beroperasi sejak 2020, visi & misi.",
    route: "/tentang-kami",
    schema: tentangKamiSchema,
    defaults: tentangKamiDefaults,
  },
  layanan: {
    id: "layanan",
    title: "Layanan Service",
    description: "Daftar produk surety bond, bank garansi, asuransi CAR, CGL, alur 4 langkah.",
    route: "/layanan-service",
    schema: layananSchema,
    defaults: layananDefaults,
  },
  kontak: {
    id: "kontak",
    title: "Kontak Kami",
    description: "Formulir kirim pesan, detail alamat Graha Surveyor, jam operasional, peta lokasi, FAQ.",
    route: "/kontak-kami",
    schema: kontakSchema,
    defaults: kontakDefaults,
  },
  "syarat-ketentuan": {
    id: "syarat-ketentuan",
    title: "Syarat & Ketentuan",
    description: "Checklist dokumen legalitas, syarat per jenis warkat (bid bond, performance, advance, maintenance).",
    route: "/syarat-ketentuan",
    schema: syaratKetentuanSchema,
    defaults: syaratKetentuanDefaults,
  },
  "blog-index": {
    id: "blog-index",
    title: "Halaman Daftar Blog",
    description: "Header daftar artikel, kategori filter, dan banner CTA konsultasi blog.",
    route: "/blog",
    schema: blogIndexSchema,
    defaults: blogIndexDefaults,
  },
};

export const PAGE_LIST = Object.values(PAGE_REGISTRY);

export type {
  SettingsContent,
  HomeContent,
  TentangKamiContent,
  LayananContent,
  KontakContent,
  SyaratKetentuanContent,
  BlogIndexContent,
};
