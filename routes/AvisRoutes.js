import express from 'express';
import {
  getAllAvis,
  getAvisById,
  createAvis,
  updateAvis,
  deleteAvis,
} from '../controllers/AvisController.js';

const router = express.Router();

router.get('/', getAllAvis);
router.get('/:id', getAvisById);
router.post('/', createAvis);
router.put('/:id', updateAvis);
router.delete('/:id', deleteAvis);

export default router;
