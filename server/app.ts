import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import playerRoutes from "./routes/playerRoutes.ts";
import { AppDataSource } from "./data-source.ts";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/players", playerRoutes);

// Connexion à la base de données
AppDataSource.initialize()
  .then(() => {
    console.log("Connexion à la base de données réussie");
    app.listen(5000, () => console.log("Serveur en marche sur le port 5000"));
  })
  .catch((error) => console.log("Erreur de connexion à la DB:", error));
