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
router.get('/', authenticateToken, getAllRoles); // Obtenir tous les rôles
router.get('/:id', authenticateToken, getRoleById); // Obtenir un rôle par ID
router.post('/', validateRole, authorizeRole(['SuperAdmin']), authenticateToken, createRole); // Ajouter un rôle
router.put('/:id', validateRole, authorizeRole(['SuperAdmin']), authenticateToken, updateRole); // Mettre à jour un rôle
router.delete('/:id', authorizeRole(['SuperAdmin']), authenticateToken, deleteRole); // Supprimer un rôle

export default router;
