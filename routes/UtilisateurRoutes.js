import express from 'express';
import { validateUtilisateur, validateLoginUtilisateur } from '../middlewares/validationMiddleware.js';
import { authenticateToken, authorizeRole } from '../middlewares/authMiddleware.js'
import {
  getAllUtilisateurs,
  getUtilisateurById,
  createUtilisateur,
  updateUtilisateur,
  deleteUtilisateur,
  loginUtilisateur
} from '../controllers/UtilisateurController.js';

const router = express.Router();

// Routes
router.get('/', authorizeRole(['SuperAdmin']), authenticateToken, getAllUtilisateurs); // Obtenir tous les utilisateurs
router.get('/:id', authorizeRole(['SuperAdmin']), authenticateToken, getUtilisateurById); // Obtenir un utilisateur par ID
router.put('/:id', authorizeRole(['SuperAdmin']), authenticateToken, updateUtilisateur); // Mettre à jour un utilisateur
router.delete('/:id', authorizeRole(['SuperAdmin']), authenticateToken, deleteUtilisateur); // Supprimer un utilisateur
router.post('/', authorizeRole(['SuperAdmin']), authenticateToken, validateUtilisateur, createUtilisateur);
router.post('/login', validateLoginUtilisateur, loginUtilisateur);

export default router;
