import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  // Cek apakah request berasal dari subdomain "app." atau "admin."
  // Contoh: app.domain.com, app.localhost:3000
  const isAppSubdomain =
    host.startsWith("app.") ||
    host.startsWith("admin.") ||
    host.startsWith("cms.");

  const sessionCookie = request.cookies.get("cms_session")?.value;

  // 1. Jika diakses melalui subdomain APP (mis. app.domain.com)
  if (isAppSubdomain) {
    // Lewatkan request API dan aset statis
    if (
      pathname.startsWith("/api") ||
      pathname.startsWith("/_next") ||
      pathname.startsWith("/images")
    ) {
      return NextResponse.next();
    }

    // Jika pathname sudah berawalan /cms, sesuaikan
    const effectivePath = pathname.startsWith("/cms")
      ? pathname
      : pathname === "/"
      ? "/cms"
      : `/cms${pathname}`;

    // Cek proteksi autentikasi untuk CMS
    const isLoginPath =
      effectivePath === "/cms/login" || pathname === "/login";

    if (!sessionCookie && !isLoginPath) {
      const loginUrl = new URL("/cms/login", request.url);
      return NextResponse.redirect(loginUrl);
    }

    if (sessionCookie && isLoginPath) {
      const dashboardUrl = new URL("/cms", request.url);
      return NextResponse.redirect(dashboardUrl);
    }

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-is-cms", "1");

    // Rewrite ke path /cms internal
    const rewriteUrl = new URL(effectivePath, request.url);
    return NextResponse.rewrite(rewriteUrl, {
      request: { headers: requestHeaders },
    });
  }

  // 2. Jika diakses melalui domain utama langsung (mis. domain.com/cms)
  if (pathname.startsWith("/cms")) {
    const isLoginPath = pathname === "/cms/login";

    if (!sessionCookie && !isLoginPath) {
      const loginUrl = new URL("/cms/login", request.url);
      return NextResponse.redirect(loginUrl);
    }

    if (sessionCookie && isLoginPath) {
      const dashboardUrl = new URL("/cms", request.url);
      return NextResponse.redirect(dashboardUrl);
    }

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-is-cms", "1");

    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (metadata files)
     * - static image extensions (svg, png, jpg, jpeg, webp)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
