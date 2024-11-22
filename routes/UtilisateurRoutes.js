import express from 'express';
import { validateUtilisateur, validateLoginUtilisateur } from '../middlewares/validationMiddleware.js';
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
router.get('/', getAllUtilisateurs); // Obtenir tous les utilisateurs
router.get('/:id', getUtilisateurById); // Obtenir un utilisateur par ID
//router.post('/', createUtilisateur); // Ajouter un utilisateur
router.put('/:id', updateUtilisateur); // Mettre à jour un utilisateur
router.delete('/:id', deleteUtilisateur); // Supprimer un utilisateur
router.post('/',validateUtilisateur,createUtilisateur);
router.post('/login', validateLoginUtilisateur, loginUtilisateur);

export default router;
