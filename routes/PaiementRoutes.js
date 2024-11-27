import express from 'express';
import { authenticateToken, authorizeRole } from '../middlewares/authMiddleware.js';
import { validatePaiement } from '../middlewares/validationMiddleware.js';

import {
  getAllPaiements,
  getPaiementById,
  createPaiement,
  updatePaiement,
  deletePaiement,
} from '../controllers/PaiementController.js';

const router = express.Router();

// Routes
router.get('/', authenticateToken, authorizeRole(['Administrateur', 'SuperAdmin']), getAllPaiements); // Obtenir tous les paiements
router.get('/:id',authenticateToken, authorizeRole(['Administrateur', 'SuperAdmin']), getPaiementById); // Obtenir un paiement par ID
router.post('/', validatePaiement, authenticateToken, createPaiement); // Ajouter un paiement
router.put('/:id', validatePaiement,  updatePaiement); // Mettre à jour un paiement
router.delete('/:id',authenticateToken, authorizeRole(['Administrateur', 'SuperAdmin']),  deletePaiement); // Supprimer un paiement

export default router;
