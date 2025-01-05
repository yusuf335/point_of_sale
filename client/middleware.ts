import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/cashier/:path*", "/admin/:path*"], // Specify the routes
};

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // Exclude the login and root pages from middleware logic
  if (
    request.nextUrl.pathname.startsWith("/auth") ||
    request.nextUrl.pathname === "/"
  ) {
    return NextResponse.next();
  }

  // Define the login page URL
  const loginUrl = new URL("/auth/login", request.url);

  // Define the dashboard page URL
  const dashboardUrl = new URL("/cashier/dashboard", request.url);

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
