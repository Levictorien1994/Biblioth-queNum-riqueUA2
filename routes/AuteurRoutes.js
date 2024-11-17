import express from 'express';
import { getAllAuteurs, createAuteur, updateAuteur, deleteAuteur, getLivresByAuteur } from '../controllers/AuteurController.js';

const router = express.Router();

router.get('/', getAllAuteurs); // Obtenir tous les auteurs
router.post('/', createAuteur); // Ajouter un auteur
router.put('/:id', updateAuteur); // Modifier un auteur
router.delete('/:id', deleteAuteur); // Supprimer un auteur
router.get('/:id/livres', getLivresByAuteur); // Obtenir les livres d'un auteur

export default router;
