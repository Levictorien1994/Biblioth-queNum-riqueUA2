import express from 'express';

import { validateLivre } from '../middlewares/validationMiddleware.js';
import {
  getAllLivres,
  getLivreById,
  createLivre,
  updateLivre,
  deleteLivre,
} from '../controllers/livreController.js';
import { authenticateToken, authorizeRole } from '../middlewares/authMiddleware.js';

const router = express.Router();



// Route pour récupérer un livre par ID
router.get('/:id',authenticateToken, getLivreById);

router.get('/', authenticateToken, getAllLivres); // Accessible à tous les utilisateurs connectés
router.post('/', authenticateToken, authorizeRole(['Administrateur', 'Auteur']), validateLivre, createLivre);
router.put('/:id', authenticateToken, authorizeRole(['Administrateur', 'Auteur']), validateLivre, updateLivre);
router.delete('/:id', authenticateToken, authorizeRole(['Administrateur']), deleteLivre);

export default router;
