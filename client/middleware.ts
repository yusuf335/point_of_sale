import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/client/:path*", "/admin/:path*", "/auth/:path*"], // Specify the routes
};

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const loginUrl = new URL("/auth/login", request.url);
  const dashboardUrl = new URL("/client/dashboard", request.url);

  // Handle requests to the login page
  if (request.nextUrl.pathname.startsWith("/auth/login")) {
    if (token) {
      // Redirect to dashboard if already logged in
      return NextResponse.redirect(dashboardUrl);
    }
    // Allow access to the login page if no token
    return NextResponse.next();
  }

  // Handle requests to protected routes
  if (
    request.nextUrl.pathname.startsWith("/client") ||
    request.nextUrl.pathname.startsWith("/admin")
  ) {
    if (!token) {
      // Redirect to login if no token
      return NextResponse.redirect(loginUrl);
    }
  }

  // Allow all other requests to proceed
  return NextResponse.next();
}
