import "dotenv/config";
import "reflect-metadata";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import cors from "cors";
import http from "http";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";

// Import DataSources
import { CompanyServices } from "./services/company.services";
import { StoreServices } from "./services/store.services";

// Import Routes
import authRoutes from "./router/auth.router";

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

  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

// Rest API Routes
app.use("/api/v1/auth", authRoutes);

// Apollo Server Startup
async function setupApolloServer() {
  await server.start();
  // GraphQL API Routes
  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: async () => {
        return {
          dataSources: {
            companyAPI: CompanyServices.getInstance(),
          },
        };
      },
    })
  );
}

export { app, httpServer, setupApolloServer };
