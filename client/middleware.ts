import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/client/:path*", "/admin/:path*"], // Specify the routes
};

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // Exclude the login page from middleware logic
  if (
    request.nextUrl.pathname === "/auth/:path*" ||
    request.nextUrl.pathname === "/"
  ) {
    return NextResponse.next();
  }

  // Define the login page URL
  const loginUrl = new URL("/auth/login", request.url);

  // If no token and trying to access protected routes
  if (!token) {
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
