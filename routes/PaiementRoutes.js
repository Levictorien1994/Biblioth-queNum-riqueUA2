import express from 'express';
import { authenticateToken, authorizeRole } from '../middlewares/authMiddleware.js';
import {
  getAllPaiements,
  getPaiementById,
  createPaiement,
  updatePaiement,
  deletePaiement,
} from '../controllers/PaiementController.js';

const router = express.Router();

// Routes
router.get('/', getAllPaiements); // Obtenir tous les paiements
router.get('/:id', getPaiementById); // Obtenir un paiement par ID
router.post('/', createPaiement); // Ajouter un paiement
router.put('/:id', updatePaiement); // Mettre à jour un paiement
router.delete('/:id', deletePaiement); // Supprimer un paiement

export default router;
