import { Suspense } from "react";

// Import Apollo Client
import GraphQlClient from "@/app/graphql-client";
import Loading from "./loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GraphQlClient>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </GraphQlClient>
  );
}
