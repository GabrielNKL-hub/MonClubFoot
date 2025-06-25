import "reflect-metadata";
import { DataSource } from "typeorm";
import { Player } from "./models/Player.ts"; // ton modèle de joueur

export const AppDataSource = new DataSource({
  type: "mariadb",
  host: "localhost",
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,  // Assurez-vous que la DB est synchronisée avec les entités (en dev)
  logging: true,
  entities: [Player],  // Entités à utiliser dans la base
  migrations: [],
  subscribers: [],
});
