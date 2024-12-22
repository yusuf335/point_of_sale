import "dotenv/config";
import "reflect-metadata";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { InMemoryLRUCache } from "@apollo/utils.keyvaluecache";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import cors from "cors";
import http from "http";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";

// Import DataSources
import { CompanyServices } from "./services/company.services";
import { StoreServices } from "./services/store.services";
import { UserServices } from "./services/user.services";
import { ProductService } from "./services/product.services";
import { RegisterService } from "./services/register.services";
import { CartItemService } from "./services/cartItem.services";

// Import Routes
import authRoutes from "./router/auth.router";

// Import Auth Middleware
import { verifyToken, generateToken } from "./utils/auth/jwt";

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
});

// Rest API Routes
app.use("/api/v1/auth", authRoutes);

// Graphql DataSources
const dataSources = {
  companyAPI: CompanyServices.getInstance(),
  storeAPI: StoreServices.getInstance(),
  userAPI: UserServices.getInstance(),
  productAPI: ProductService.getInstance(),
  registerAPI: RegisterService.getInstance(),
  cartAPI: CartItemService.getInstance(),
};

// console.log(generateToken({ userId: "3", role: "admin", isActive: true }));

// Apollo Server Startup
async function setupApolloServer() {
  await server.start();
  // GraphQL API Routes
  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: async ({ req }) => {
        const token = req.headers.authorization?.split(" ")[1];

        // Check if token is provided
        if (!token) throw new Error("No token provided");

        try {
          // Verify token
          const user = verifyToken(token) as {
            userId: string;
            role: string;
            isActive: boolean;
          };

          // Check if user is active in the token before proceeding to query the database
          if (!user.isActive) throw new Error("Account is inactive");

          // // Get User active info from database using the userId
          const userIsActive =
            await UserServices.getInstance().getUserRoleAndStatus(+user.userId);

          // // Check if user is active or not from the database response
          if (!userIsActive.isActive) throw new Error("Account is inactive");

          return {
            user,
            dataSources,
          };
        } catch (error) {
          throw new Error("Invalid token");
        }
      },
    })
  );
}

export { app, httpServer, setupApolloServer };
