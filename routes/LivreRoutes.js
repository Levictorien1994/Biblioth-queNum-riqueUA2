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
router.get('/:id', authenticateToken, getLivreById);

router.get('/', authenticateToken, getAllLivres); // Accessible à tous les utilisateurs connectés
router.post('/', validateLivre,authenticateToken, authorizeRole(['Auteur', 'SuperAdmin', 'Administrateur']),  createLivre);
router.put('/:id', validateLivre,authenticateToken, authorizeRole(['Administrateur', 'SuperAdmin', 'Auteur']),  updateLivre);
router.delete('/:id',authenticateToken, authorizeRole(['Administrateur']),  deleteLivre);

export default router;
