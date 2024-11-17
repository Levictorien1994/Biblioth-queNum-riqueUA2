import express from 'express';
import { getAllCategories, createCategorie, updateCategorie, deleteCategorie, getLivresByCategorie } from '../controllers/CategorieController.js';

const router = express.Router();

router.get('/', getAllCategories); // Obtenir toutes les catégories
router.post('/', createCategorie); // Ajouter une catégorie
router.put('/:id', updateCategorie); // Modifier une catégorie
router.delete('/:id', deleteCategorie); // Supprimer une catégorie
router.get('/:id/livres', getLivresByCategorie); // Obtenir les livres d'une catégorie

export default router;
