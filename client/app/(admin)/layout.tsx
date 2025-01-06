import styles from "@/app/styles/layout.module.scss";

// Import Apollo Client
import GraphQlClient from "@/app/graphql-client";

// Import SideBar
import SideBar from "@/app/components/nav/sidebar/Sidebar";
import { LoadingProvider } from "../components/providers/loading-providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GraphQlClient>
      <LoadingProvider>
        {/* Layout */}
        <div className={styles.layout}>
          {/* Sidebar */}
          <SideBar />
          {/* Content */}
          <div className={styles.content}>
            {/* Suspense for Content */}
            {children}
          </div>
        </div>
      </LoadingProvider>
    </GraphQlClient>
  );
}
