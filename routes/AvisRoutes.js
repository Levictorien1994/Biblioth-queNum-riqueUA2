import express from 'express';
import { authenticateToken, authorizeRole } from '../middlewares/authMiddleware.js';
import { validateAvis } from '../middlewares/validationMiddleware.js';
import {
  getAllAvis,
  getAvisById,
  createAvis,
  updateAvis,
  deleteAvis,
} from '../controllers/AvisController.js';

const router = express.Router();

router.get('/', authenticateToken, getAllAvis);
router.get('/:id', authenticateToken, getAvisById);
router.post('/', validateAvis, authenticateToken, createAvis);
router.put('/:id', validateAvis, authenticateToken, updateAvis);
router.delete('/:id', validateAvis, authenticateToken, authorizeRole(['SuperAdmin', 'Administrateur']), deleteAvis);

export default router;
