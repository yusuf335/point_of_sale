import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const config = {
  runtime: "nodejs",
  matcher: ["/client/:path*", "/admin/:path*"], // Specify the routes
};

const SECRET = process.env.JWT_SECRET || "your-secret-key";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  console.log("Token:", token);

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
  const dashboardUrl = new URL("/client/dashboard", request.url);

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(loginUrl);
  }

  // try {
  //   // Verify token and check expiration
  //   const decoded = jwt.verify(token, SECRET);
  //   return NextResponse.redirect(dashboardUrl);
  // } catch (err) {
  //   if (err instanceof Error) {
  //     console.error("Invalid or expired token:", err.message);
  //   } else {
  //     console.error("Invalid or expired token:", err);
  //   }
  //   return NextResponse.redirect(loginUrl);
  // }

  return NextResponse.next();
}
