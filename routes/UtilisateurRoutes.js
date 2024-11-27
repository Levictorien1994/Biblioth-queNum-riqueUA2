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
router.get('/',authenticateToken, authorizeRole(['SuperAdmin']),  getAllUtilisateurs); // Obtenir tous les utilisateurs
router.get('/:id', authenticateToken, authorizeRole(['SuperAdmin']), getUtilisateurById); // Obtenir un utilisateur par ID
router.put('/:id',authenticateToken, authorizeRole(['SuperAdmin']),  updateUtilisateur); // Mettre à jour un utilisateur
router.put('/:id', authenticateToken,authorizeRole(['SuperAdmin']),  updateUtilisateur); // Mettre à jour un utilisateur
router.delete('/:id',authenticateToken, authorizeRole(['SuperAdmin']), deleteUtilisateur); // Supprimer un utilisateur
router.post('/',authenticateToken, authorizeRole(['SuperAdmin']),  validateUtilisateur, createUtilisateur);
router.post('/login', validateLoginUtilisateur, loginUtilisateur);

export default router;
