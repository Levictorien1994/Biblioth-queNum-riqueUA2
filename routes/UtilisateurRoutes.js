import express from 'express';
import {
  getAllUtilisateurs,
  getUtilisateurById,
  createUtilisateur,
  updateUtilisateur,
  deleteUtilisateur,
} from '../controllers/UtilisateurController.js';

const router = express.Router();

// Routes
router.get('/', getAllUtilisateurs); // Obtenir tous les utilisateurs
router.get('/:id', getUtilisateurById); // Obtenir un utilisateur par ID
router.post('/', createUtilisateur); // Ajouter un utilisateur
router.put('/:id', updateUtilisateur); // Mettre à jour un utilisateur
router.delete('/:id', deleteUtilisateur); // Supprimer un utilisateur

export default router;
