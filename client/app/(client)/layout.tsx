import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/styles/globals.scss";
import styles from "@/app/styles/layout.module.scss";

// Import Apollo Client
import GraphQlClient from "@/app/graphql-client";

// Import SideBar
import SideBar from "@/app/components/nav/sidebar/Sidebar";
import MobileNav from "@/app/components/nav/mobileNav/MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "POS - Point of Sales",
  description: "POS - Point of Sales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Layout */}
        <div className={styles.layout}>
          {/* Mobile nav */}
          <MobileNav />
          {/* Sidebar */}
          <SideBar />
          {/* Content */}
          <div className={styles.content}>
            <GraphQlClient>{children}</GraphQlClient>
          </div>
        </div>
      </body>
    </html>
  );
}
