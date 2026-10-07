/**
 * Deklarasi skema form untuk editor CMS.
 * Skema bersifat JSON-serializable sehingga dapat dikirim dari Server Component
 * ke Client Component (editor) tanpa transformasi.
 */

export type PrimitiveFieldType =
  | "text" // input satu baris
  | "textarea" // paragraf polos
  | "richtext" // paragraf dengan dukungan **tebal**
  | "image" // URL gambar + upload ke Supabase Storage
  | "icon" // pilihan ikon dari daftar ICON_NAMES
  | "url"; // tautan / nomor / query

export interface PrimitiveField {
  type: PrimitiveFieldType;
  key: string;
  label: string;
  help?: string;
  placeholder?: string;
}

export interface StringListField {
  type: "stringList";
  key: string;
  label: string;
  help?: string;
  itemLabel?: string;
  multiline?: boolean;
  rich?: boolean;
}

export interface GroupField {
  type: "group";
  key: string;
  label: string;
  help?: string;
  fields: Field[];
}

export interface ListField {
  type: "list";
  key: string;
  label: string;
  help?: string;
  itemLabel: string;
  /** key field di item yang dipakai sebagai judul ringkas item */
  titleKey?: string;
  fields: Field[];
}

export type Field = PrimitiveField | StringListField | GroupField | ListField;

export interface Section {
  /** key objek di root konten. Gunakan "" untuk field yang berada di root. */
  key: string;
  title: string;
  description?: string;
  fields: Field[];
}

export interface PageSchema {
  sections: Section[];
}

/* ---------- Helper builder agar definisi skema ringkas ---------- */

export const text = (key: string, label: string, help?: string): PrimitiveField => ({
  type: "text",
  key,
  label,
  help,
});
export const textarea = (key: string, label: string, help?: string): PrimitiveField => ({
  type: "textarea",
  key,
  label,
  help,
});
export const rich = (key: string, label: string, help?: string): PrimitiveField => ({
  type: "richtext",
  key,
  label,
  help: help ?? "Gunakan **teks** untuk menebalkan kata.",
});
export const image = (key: string, label: string, help?: string): PrimitiveField => ({
  type: "image",
  key,
  label,
  help,
});
export const icon = (key = "icon", label = "Ikon"): PrimitiveField => ({
  type: "icon",
  key,
  label,
});
export const url = (key: string, label: string, help?: string): PrimitiveField => ({
  type: "url",
  key,
  label,
  help,
});
export const strings = (
  key: string,
  label: string,
  opts: Partial<Omit<StringListField, "type" | "key" | "label">> = {}
): StringListField => ({ type: "stringList", key, label, ...opts });
export const group = (key: string, label: string, fields: Field[], help?: string): GroupField => ({
  type: "group",
  key,
  label,
  fields,
  help,
});
export const list = (
  key: string,
  label: string,
  itemLabel: string,
  fields: Field[],
  titleKey = "title",
  help?: string
): ListField => ({ type: "list", key, label, itemLabel, fields, titleKey, help });

/** Field SEO standar yang dipakai semua halaman. */
export const seoSection = (description?: string): Section => ({
  key: "seo",
  title: "SEO",
  description:
    description ??
    "Judul & deskripsi yang tampil di hasil pencarian Google dan saat link dibagikan.",
  fields: [
    text("title", "Meta Title", "Disarankan 50–60 karakter."),
    textarea("description", "Meta Description", "Disarankan 140–160 karakter."),
    strings("keywords", "Keywords", { itemLabel: "Keyword" }),
  ],
});
