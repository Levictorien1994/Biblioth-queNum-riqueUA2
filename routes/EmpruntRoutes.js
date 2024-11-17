import express from 'express';
import { getAllEmprunts, createEmprunt, updateEmprunt, deleteEmprunt } from '../controllers/EmpruntController.js';

const router = express.Router();

router.get('/', getAllEmprunts); // Obtenir tous les emprunts
router.post('/', createEmprunt); // Ajouter un emprunt
router.put('/:id', updateEmprunt); // Modifier un emprunt
router.delete('/:id', deleteEmprunt); // Supprimer un emprunt

export default router;
