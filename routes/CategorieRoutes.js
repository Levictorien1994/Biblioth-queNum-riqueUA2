import express from 'express';
import { authenticateToken, authorizeRole } from '../middlewares/authMiddleware.js';
import { validateCategorie } from '../middlewares/validationMiddleware.js';
import {
  getAllCategories,
  getCategorieById,
  createCategorie,
  updateCategorie,
  deleteCategorie,
} from '../controllers/CategorieController.js';

const router = express.Router();

router.get('/', authenticateToken, getAllCategories);
router.get('/:id', authenticateToken, getCategorieById);
router.post('/', validateCategorie,authenticateToken, authorizeRole(['SuperAdmin']),  createCategorie);
router.put('/:id', validateCategorie,authenticateToken, authorizeRole(['SuperAdmin']),  updateCategorie);
router.delete('/:id', validateCategorie,authenticateToken, authorizeRole(['SuperAdmin', 'Administrateur']),  deleteCategorie);

export default router;
