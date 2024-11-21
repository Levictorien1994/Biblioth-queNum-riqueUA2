import express from 'express';
import {
  getAllAuteurs,
  getAuteurById,
  createAuteur,
  updateAuteur,
  deleteAuteur,
} from '../controllers/AuteurController.js';

const router = express.Router();

// Routes
router.get('/', getAllAuteurs); // Obtenir tous les auteurs
router.get('/:id', getAuteurById); // Obtenir un auteur par ID
router.post('/', createAuteur); // Ajouter un nouvel auteur
router.put('/:id', updateAuteur); // Mettre à jour un auteur
router.delete('/:id', deleteAuteur); // Supprimer un auteur

export default router;
