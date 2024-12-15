import { app, httpServer, setupApolloServer } from "./app";
import databaseConnection from "./utils/database";

async function startServer() {
  const PORT = process.env.PORT || 4000;
  console.log("PORT", PORT);
  try {
    // Setup Apollo Server
    await setupApolloServer();

    // Connect to the database
    await databaseConnection();
    console.log("Database connected successfully");

    // Fallback route for unhandled routes
    app.all("*", (_req, res) => {
      res.status(404).json({ error: "Route not found" });
    });

    // Modified server startup
    await new Promise<void>((resolve) =>
      httpServer.listen({ port: PORT }, resolve)
    );
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1); // Exit the process on critical failure
  }

  // Graceful shutdown for process termination
  process.on("SIGINT", () => {
    console.log("Server shutting down...");
    process.exit(0);
  });
}

startServer();
