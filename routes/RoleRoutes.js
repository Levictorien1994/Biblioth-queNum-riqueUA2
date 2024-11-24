import express from 'express';
import { authenticateToken, authorizeRole } from '../middlewares/authMiddleware.js';
import { validateRole } from '../middlewares/validationMiddleware.js';
import {
  getAllRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
} from '../controllers/RoleController.js';

const router = express.Router();

// Routes
router.get('/', getAllRoles); // Obtenir tous les rôles
router.get('/:id', getRoleById); // Obtenir un rôle par ID
router.post('/',validateRole,authorizeRole(['SuperAdmin']),authenticateToken, createRole); // Ajouter un rôle
router.put('/:id',validateRole,authorizeRole(['SuperAdmin']),updateRole); // Mettre à jour un rôle
router.delete('/:id',authorizeRole(['SuperAdmin']), deleteRole); // Supprimer un rôle

export default router;
