import express from 'express';
import {
  getAllAuteurs,
  getAuteurById,
  createAuteur,
  updateAuteur,
  deleteAuteur,
} from '../controllers/AuteurController.js';
import { authenticateToken, authorizeRole } from '../middlewares/authMiddleware.js';
const router = express.Router();

// Routes
router.get('/', authenticateToken,getAllAuteurs); // Obtenir tous les auteurs
router.get('/:id', authenticateToken,getAuteurById); // Obtenir un auteur par ID
router.post('/',authenticateToken, createAuteur); // Ajouter un nouvel auteur
router.put('/:id', authenticateToken,updateAuteur); // Mettre à jour un auteur
router.delete('/:id',authenticateToken, deleteAuteur); // Supprimer un auteur

export default router;
