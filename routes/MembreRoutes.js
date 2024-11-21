import express from 'express';
import {
  getAllMembres,
  getMembreById,
  createMembre,
  updateMembre,
  deleteMembre,
} from '../controllers/MembreController.js';

const router = express.Router();

// Routes
router.get('/', getAllMembres); // Obtenir tous les membres
router.get('/:id', getMembreById); // Obtenir un membre par ID
router.post('/', createMembre); // Ajouter un membre
router.put('/:id', updateMembre); // Mettre à jour un membre
router.delete('/:id', deleteMembre); // Supprimer un membre

export default router;
