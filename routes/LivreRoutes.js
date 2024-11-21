import express from 'express';
import {
  getAllLivres,
  getLivreById,
  createLivre,
  updateLivre,
  deleteLivre,
} from '../controllers/livreController.js';

const router = express.Router();

// Route pour récupérer tous les livres
router.get('/', getAllLivres);

// Route pour récupérer un livre par ID
router.get('/:id', getLivreById);

// Route pour créer un nouveau livre
router.post('/', createLivre);

// Route pour mettre à jour un livre
router.put('/:id', updateLivre);

// Route pour supprimer un livre
router.delete('/:id', deleteLivre);

export default router;
