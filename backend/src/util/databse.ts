import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ["src/model/*.ts"],
  synchronize: true,
});

const databaseConnection = async () => {
  try {
    await AppDataSource.initialize();
  } catch (error) {
    console.log("Database connection error", error);
    throw new Error("Database connection error");
  }
};

export default databaseConnection;
