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
router.post('/', validateCategorie, authorizeRole(['SuperAdmin']), authenticateToken, createCategorie);
router.put('/:id', validateCategorie, authorizeRole(['SuperAdmin']), authenticateToken, updateCategorie);
router.delete('/:id', validateCategorie, authorizeRole(['SuperAdmin', 'Administrateur']), authenticateToken, deleteCategorie);

export default router;
