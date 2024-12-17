import { DataSource } from "typeorm";

const databaseConnection = async () => {
  const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true, // Don't use this in production
    logging: false,
    entities: ["../model/*"], // Add your entity files here
  });

  await AppDataSource.initialize();
  console.log("Database connected successfully!");
  return AppDataSource;
};

export default databaseConnection;
