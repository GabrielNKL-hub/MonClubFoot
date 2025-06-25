import { AppDataSource } from "../data-source.ts";
import { Player } from "../models/Player.ts";

// Récupérer tous les joueurs
export const getAllPlayers = async (req:any, res:any) => {
  try {
    const playerRepository = AppDataSource.getRepository(Player);
    const players = await playerRepository.find();  // Récupère tous les joueurs
    res.json(players);  // Retourne les joueurs en JSON
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des joueurs", error });
  }
};
