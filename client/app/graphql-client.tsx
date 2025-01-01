"use client";

// Apollo Client
import { ApolloProvider } from "@apollo/client";
import client from "@/app/lib/apollo-client";

const GraphQlClient = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphQlClient;
