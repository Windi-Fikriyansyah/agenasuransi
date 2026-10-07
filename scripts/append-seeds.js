const fs = require("fs");
const path = require("path");

// We can read defaults by importing JSON or writing helper
const { settingsDefaults } = require("../lib/content/pages/settings");
const { homeDefaults } = require("../lib/content/pages/home");
const { tentangKamiDefaults } = require("../lib/content/pages/tentang-kami");
const { layananDefaults } = require("../lib/content/pages/layanan");
const { kontakDefaults } = require("../lib/content/pages/kontak");
const { syaratKetentuanDefaults } = require("../lib/content/pages/syarat-ketentuan");
const { blogIndexDefaults } = require("../lib/content/pages/blog-index");
const { ARTICLES } = require("../data/articles");

const pages = [
  { id: "settings", title: "Pengaturan Global", data: settingsDefaults },
  { id: "home", title: "Halaman Beranda", data: homeDefaults },
  { id: "tentang-kami", title: "Tentang Kami", data: tentangKamiDefaults },
  { id: "layanan", title: "Layanan Service", data: layananDefaults },
  { id: "kontak", title: "Kontak Kami", data: kontakDefaults },
  { id: "syarat-ketentuan", title: "Syarat & Ketentuan", data: syaratKetentuanDefaults },
  { id: "blog-index", title: "Halaman Daftar Blog", data: blogIndexDefaults },
];

const schemaPath = path.join(__dirname, "..", "supabase", "schema.sql");
let sql = fs.readFileSync(schemaPath, "utf-8");

sql += "\n-- SEED DATA HALAMAN WEBSITE\n";
for (const p of pages) {
  const jsonStr = JSON.stringify(p.data).replace(/'/g, "''");
  sql += `INSERT INTO public.pages (id, title, content)
VALUES ('${p.id}', '${p.title.replace(/'/g, "''")}', '${jsonStr}'::jsonb)
ON CONFLICT (id) DO NOTHING;\n\n`;
}

sql += "\n-- SEED DATA ARTIKEL BLOG\n";
for (const a of ARTICLES) {
  const contentJson = JSON.stringify(a.content).replace(/'/g, "''");
  const takeawaysJson = JSON.stringify(a.keyTakeaways).replace(/'/g, "''");
  const tagsJson = JSON.stringify(a.tags).replace(/'/g, "''");

  sql += `INSERT INTO public.articles (
  id, title, slug, category, date_display, iso_date, read_time,
  author, author_role, summary, content, key_takeaways, tags
)
VALUES (
  '${a.id}',
  '${a.title.replace(/'/g, "''")}',
  '${a.slug}',
  '${a.category}',
  '${a.date}',
  '${a.isoDate}',
  '${a.readTime}',
  '${a.author.replace(/'/g, "''")}',
  '${a.authorRole.replace(/'/g, "''")}',
  '${a.summary.replace(/'/g, "''")}',
  '${contentJson}'::jsonb,
  '${takeawaysJson}'::jsonb,
  '${tagsJson}'::jsonb
)
ON CONFLICT (id) DO NOTHING;\n\n`;
}

fs.writeFileSync(schemaPath, sql, "utf-8");
console.log("Seeds successfully appended to supabase/schema.sql!");
