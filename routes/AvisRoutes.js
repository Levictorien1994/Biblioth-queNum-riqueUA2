import express from 'express';
import { getAllAvis, createAvis, updateAvis, deleteAvis, getFilteredAvis } from '../controllers/AvisController.js';

const router = express.Router();

router.get('/', getAllAvis); // Obtenir tous les avis
router.get('/filter', getFilteredAvis); // Filtrer les avis
router.post('/', createAvis); // Ajouter un avis
router.put('/:id', updateAvis); // Modifier un avis
router.delete('/:id', deleteAvis); // Supprimer un avis

export default router;
