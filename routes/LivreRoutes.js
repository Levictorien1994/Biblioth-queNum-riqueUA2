import express from 'express';
import { getAllLivres, createLivre, updateLivre, deleteLivre } from '../controllers/LivreController.js';

const router = express.Router();

router.get('/', getAllLivres); // Obtenir tous les livres
router.post('/', createLivre); // Ajouter un livre
router.put('/:id', updateLivre); // Modifier un livre
router.delete('/:id', deleteLivre); // Supprimer un livre

export default router;
