import "dotenv/config";
import "reflect-metadata";
import express from "express";
import { GraphQLError } from "graphql";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { InMemoryLRUCache } from "@apollo/utils.keyvaluecache";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import cors from "cors";
import http from "http";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";

// Import Routes
import authRoutes from "./router/auth.router";

// Import Custom Error Handler
import { CustomError } from "./utils/customError";

// GraphQL Context
import { graphQLContext } from "./utils/graphQLContext";

// Express App Setup
const app = express();

// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);

// Middlewares
app.use(cors<cors.CorsRequest>(), express.json());

// Apollo Server Setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  cache: new InMemoryLRUCache(),
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  formatError: (error: GraphQLError) => {
    // Default fallback for unexpected errors
    return {
      message: error.message,
      code: error?.extensions.code || "INTERNAL_SERVER_ERROR",
      statusCode: error?.extensions.statusCode || 500,
    };
  },
});

// Rest API Routes
app.use("/api/v1/auth", authRoutes);

// Apollo Server Startup
async function setupApolloServer() {
  await server.start();
  // GraphQL API Routes
  app.use(
    "/graphql/v1",
    expressMiddleware(server, {
      context: async ({ req }) => await graphQLContext({ req }),
    })
  );
}

export { app, httpServer, setupApolloServer };
