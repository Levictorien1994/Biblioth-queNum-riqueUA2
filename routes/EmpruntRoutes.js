import express from 'express';
import { authenticateToken, authorizeRole } from '../middlewares/authMiddleware.js';
import { validateEmprunt } from '../middlewares/validationMiddleware.js';
import {
  getAllEmprunts,
  getEmpruntById,
  createEmprunt,
  updateEmprunt,
  deleteEmprunt,
} from '../controllers/EmpruntController.js';

const router = express.Router();

// Routes
router.get('/', authenticateToken, getAllEmprunts); // Obtenir tous les emprunts
router.get('/:id', authenticateToken, getEmpruntById); // Obtenir un emprunt par ID
router.post('/', validateEmprunt, authenticateToken, createEmprunt); // Ajouter un emprunt
router.put('/:id', validateEmprunt, authenticateToken, updateEmprunt); // Mettre à jour un emprunt
router.delete('/:id', authenticateToken, authorizeRole(['SuperAdmin', 'Administrateur']), deleteEmprunt); // Supprimer un emprunt

export default router;
