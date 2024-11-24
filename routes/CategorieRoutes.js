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

router.get('/', getAllCategories);
router.get('/:id', getCategorieById);
router.post('/',validateCategorie,authenticateToken, createCategorie);
router.put('/:id',validateCategorie,authorizeRole(['SuperAdmin']), updateCategorie);
router.delete('/:id', validateCategorie,authorizeRole(['SuperAdmin','Administrateur']), deleteCategorie);

export default router;
