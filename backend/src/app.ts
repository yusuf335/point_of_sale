import "reflect-metadata";
import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import databaseConnection from "./util/databse";

// Import Router
import AuthRouter from "./router/auth";

const app = express();
app.use(bodyParser.json());

// CROS Configuartion
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

/********** Define All Router ************/
app.use("/api/v1/auth", AuthRouter);

// Handle unhandled routes
app.all("*", (req, res, next) => {});


// Database Connection
databaseConnection().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
