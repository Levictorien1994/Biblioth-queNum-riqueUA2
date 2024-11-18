import express from 'express';
import { getFilteredMembres, getAllMembres, createMembre, updateMembre, deleteMembre } from '../controllers/MembreController.js';

const router = express.Router();

router.get('/', getAllMembres); // Obtenir tous les membres
router.post('/', createMembre); // Ajouter un membre
router.put('/:id', updateMembre); // Modifier un membre
router.delete('/:id', deleteMembre); // Supprimer un membre
router.get('/filter', getFilteredMembres);

export default router;
