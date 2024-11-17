import express from 'express';
import { getAllLivres, createLivre, updateLivre, deleteLivre } from  "/controllers/LivreController.js";

const router = express.Router();

router.get('/', getAllLivres);
router.post('/', createLivre);
router.put('/:id', updateLivre);
router.delete('/:id', deleteLivre);

export default router;
