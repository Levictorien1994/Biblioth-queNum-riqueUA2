import express from 'express';
import { getAllAuteurs, createAuteur, updateAuteur, deleteAuteur } from '../controllers/AuteurController.js';

const router = express.Router();

router.get('/', getAllAuteurs); // Obtenir tous les auteurs
router.post('/', createAuteur); // Ajouter un auteur
router.put('/:id', updateAuteur); // Modifier un auteur
router.delete('/:id', deleteAuteur); // Supprimer un auteur

export default router;
