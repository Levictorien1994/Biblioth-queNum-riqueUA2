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
router.post('/',validateLivre,authorizeRole(['Auteur','SuperAdmin','Administrateur']),authenticateToken,   createLivre);
router.put('/:id',validateLivre,authorizeRole(['Administrateur','SuperAdmin', 'Auteur']),authenticateToken,    updateLivre);
router.delete('/:id',authorizeRole(['Administrateur']),authenticateToken,   deleteLivre);

export default router;
