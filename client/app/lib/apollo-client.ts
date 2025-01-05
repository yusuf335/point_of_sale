import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_API_URL || "http://localhost:4000/graphql",
  credentials: "include", // Ensure cookies are sent
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
