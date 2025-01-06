import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeJwt } from "./app/utils/jwt-decode";

export const config = {
  matcher: ["/cashier/:path*", "/admin/:path*", "/auth/:path*"],
};

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // Define URLs for redirection
  const loginUrl = new URL("/auth/login", request.url);
  const cashierDashboardUrl = new URL("/cashier/dashboard", request.url);
  const adminDashboardUrl = new URL("/admin/dashboard", request.url);

  // Handle unauthenticated access to protected routes
  if (!token) {
    // Allow access to "/auth" routes when unauthenticated
    if (request.nextUrl.pathname.startsWith("/auth")) {
      return NextResponse.next();
    }
    // Redirect unauthenticated users to the login page
    return NextResponse.redirect(loginUrl);
  }

  // Decode the token to get user data
  let decodedToken;
  try {
    decodedToken = decodeJwt(token);
  } catch (error) {
    console.error("Invalid token:", error);
    // Clear the token cookie and redirect to login
    const response = NextResponse.redirect(loginUrl);
    response.cookies.delete("token");
    return response;
  }

  // Check if the token is expired
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
  if (decodedToken?.exp && decodedToken.exp < currentTime) {
    console.warn("Token has expired");
    // Clear the token cookie and redirect to login
    const response = NextResponse.redirect(loginUrl);
    response.cookies.delete("token");
    return response;
  }

  // Extract the user role from the decoded token
  const userRole = decodedToken?.role.toLowerCase();

  // Handle valid token accessing /auth routes
  const pathname = request.nextUrl.pathname;

  // Handle valid token accessing /auth routes
  if (
    pathname.startsWith("/auth") &&
    !pathname.startsWith("/auth/forgot") &&
    !pathname.startsWith("/auth/change-password")
  ) {
    if (userRole === "cashier") {
      // Redirect cashier to their dashboard
      return NextResponse.redirect(cashierDashboardUrl);
    }
    if (userRole === "admin") {
      // Redirect admin to their dashboard
      return NextResponse.redirect(adminDashboardUrl);
    }
  }

  if (userRole === "cashier" && pathname.startsWith("/admin")) {
    // Redirect cashier to their dashboard if accessing admin routes
    return NextResponse.redirect(cashierDashboardUrl);
  }

  if (userRole === "admin" && pathname.startsWith("/cashier")) {
    // Redirect admin to their dashboard if accessing cashier routes
    return NextResponse.redirect(adminDashboardUrl);
  }

  // Allow access if roles and routes match
  return NextResponse.next();
}
