import express from "express";
import { getAllPlayers } from "../controllers/PlayerController.ts";

const router = express.Router();

// Récupérer tous les joueurs
router.get("/", getAllPlayers);

export default router;
