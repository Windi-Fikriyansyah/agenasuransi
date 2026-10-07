const fs = require("fs");
const path = require("path");

const adminHash = "$2b$10$VuOA8gyvI/ovUpt1Ev0Iy.dzAUjumTh9WYlhDa7ycZsOSMEfe7a0O"; // admin12345

const sqlHeader = `-- ========================================================
-- SCHEMA SQL SUPABASE UNTUK CMS PT NIAGA JAMINAN NUSANTARA
-- Jalankan file ini di Supabase SQL Editor (1-Click Run)
-- ========================================================

-- 1. TABEL ADMINS (Autentikasi tanpa registrasi publik)
CREATE TABLE IF NOT EXISTS public.admins (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL DEFAULT 'Administrator',
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. TABEL PAGES (Menyimpan seluruh isi konten halaman dalam JSONB)
CREATE TABLE IF NOT EXISTS public.pages (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  content JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. TABEL ARTICLES (Blog & Edukasi Penjaminan)
CREATE TABLE IF NOT EXISTS public.articles (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL,
  date_display TEXT NOT NULL,
  iso_date TEXT NOT NULL,
  read_time TEXT NOT NULL,
  author TEXT NOT NULL,
  author_role TEXT NOT NULL,
  summary TEXT NOT NULL,
  content JSONB NOT NULL DEFAULT '[]'::jsonb,
  key_takeaways JSONB NOT NULL DEFAULT '[]'::jsonb,
  tags JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. BUCKET STORAGE 'media' (Untuk upload foto & logo)
INSERT INTO storage.buckets (id, name, public)
VALUES ('media', 'media', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Policy agar gambar di bucket media dapat dibaca oleh publik
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Public Access Media'
  ) THEN
    CREATE POLICY "Public Access Media"
      ON storage.objects FOR SELECT
      USING (bucket_id = 'media');
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Allow Upload Media'
  ) THEN
    CREATE POLICY "Allow Upload Media"
      ON storage.objects FOR INSERT
      WITH CHECK (bucket_id = 'media');
  END IF;
END $$;

-- ========================================================
-- SEED DATA DEFAULT (DUMMY ADMIN, HALAMAN & ARTIKEL)
-- ========================================================

-- Akun Super Admin Dummy (username: admin / password: admin12345)
INSERT INTO public.admins (id, username, password_hash, name, role)
VALUES (
  'admin-default-01',
  'admin',
  '${adminHash}',
  'Super Admin PT Niaga Jaminan Nusantara',
  'admin'
)
ON CONFLICT (username) DO NOTHING;

`;

const outDir = path.join(process.cwd(), "supabase");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "schema.sql"), sqlHeader, "utf-8");
console.log("schema.sql written successfully!");
