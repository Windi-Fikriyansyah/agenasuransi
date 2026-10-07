import "server-only";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";
import { createClient } from "@supabase/supabase-js";
import { getSupabaseServer, isSupabaseConfigured } from "@/lib/supabase/server";

const COOKIE_NAME = "cms_session";
const JWT_SECRET_STRING =
  process.env.ADMIN_JWT_SECRET ||
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  "cms-njn-super-secret-key-32-chars-long-minimum-2026";
const JWT_SECRET = new TextEncoder().encode(JWT_SECRET_STRING);

// Fallback credentials
const DEFAULT_USERNAME = process.env.ADMIN_USERNAME || "admin";
const DEFAULT_PASSWORD = process.env.ADMIN_PASSWORD || "admin12345";

export interface AdminUser {
  id: string;
  username: string;
  name: string;
  role: string;
}

export async function createSessionToken(user: AdminUser): Promise<string> {
  return new SignJWT({
    sub: user.id,
    username: user.username,
    name: user.name,
    role: user.role,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(JWT_SECRET);
}

export async function verifySessionToken(token: string): Promise<AdminUser | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    if (!payload.sub || !payload.username) return null;
    return {
      id: String(payload.sub),
      username: String(payload.username),
      name: String(payload.name || payload.username),
      role: String(payload.role || "admin"),
    };
  } catch {
    return null;
  }
}

export async function getCurrentAdmin(): Promise<AdminUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

export async function setSessionCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 hari
  });
}

export async function clearSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

/**
 * Autentikasi admin:
 * 1. Coba login melalui Supabase Authentication (auth.users)
 * 2. Coba login melalui tabel public.admins
 * 3. Fallback dummy check jika diatur di env
 */
export async function authenticateAdmin(
  usernameInput: string,
  passwordInput: string
): Promise<{ user: AdminUser | null; error?: string }> {
  const username = usernameInput.trim();
  const password = passwordInput;

  if (!username || !password) {
    return { user: null, error: "Email/username dan password wajib diisi." };
  }

  // 1. Coba verifikasi dengan Supabase jika konfigurasi aktif
  if (isSupabaseConfigured()) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const key =
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY!;

    // 1A. Verifikasi akun yang terdaftar di Supabase Authentication (auth.users)
    try {
      const authClient = createClient(supabaseUrl, key, {
        auth: { persistSession: false, autoRefreshToken: false },
      });

      const { data: authData, error: authError } = await authClient.auth.signInWithPassword({
        email: username,
        password: password,
      });

      if (!authError && authData?.user) {
        const u = authData.user;
        const displayName =
          u.user_metadata?.name ||
          u.user_metadata?.full_name ||
          u.email?.split("@")[0] ||
          "Administrator";
        return {
          user: {
            id: u.id,
            username: u.email || username,
            name: displayName,
            role: (u.user_metadata?.role as string) || "admin",
          },
        };
      }
    } catch (authErr) {
      console.warn("[authenticateAdmin] Supabase Auth check error:", authErr);
    }

    // 1B. Verifikasi akun di tabel public.admins
    const supabase = getSupabaseServer();
    if (supabase) {
      try {
        const { data: adminRow } = await supabase
          .from("admins")
          .select("id, username, password_hash, name, role")
          .eq("username", username)
          .maybeSingle();

        if (adminRow?.password_hash) {
          const match = await bcrypt.compare(password, adminRow.password_hash);
          if (match) {
            return {
              user: {
                id: adminRow.id,
                username: adminRow.username,
                name: adminRow.name || adminRow.username,
                role: adminRow.role || "admin",
              },
            };
          }
        }
      } catch (err) {
        console.warn("[authenticateAdmin] Supabase admins table check error:", err);
      }
    }
  }

  // 2. Fallback check: data dummy jika diatur di env
  if (DEFAULT_USERNAME && DEFAULT_PASSWORD && username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
    return {
      user: {
        id: "dummy-admin-01",
        username: DEFAULT_USERNAME,
        name: "Super Admin",
        role: "admin",
      },
    };
  }

  return { user: null, error: "Email/username atau password salah." };
}
