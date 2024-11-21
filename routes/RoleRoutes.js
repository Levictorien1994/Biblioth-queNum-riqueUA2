import express from 'express';
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
router.post('/', createRole); // Ajouter un rôle
router.put('/:id', updateRole); // Mettre à jour un rôle
router.delete('/:id', deleteRole); // Supprimer un rôle

export default router;
