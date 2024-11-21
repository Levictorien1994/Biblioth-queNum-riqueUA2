import express from 'express';
import {
  getAllEmprunts,
  getEmpruntById,
  createEmprunt,
  updateEmprunt,
  deleteEmprunt,
} from '../controllers/EmpruntController.js';

const router = express.Router();

// Routes
router.get('/', getAllEmprunts); // Obtenir tous les emprunts
router.get('/:id', getEmpruntById); // Obtenir un emprunt par ID
router.post('/', createEmprunt); // Ajouter un emprunt
router.put('/:id', updateEmprunt); // Mettre à jour un emprunt
router.delete('/:id', deleteEmprunt); // Supprimer un emprunt

export default router;
