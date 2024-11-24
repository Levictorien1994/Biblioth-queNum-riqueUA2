import express from 'express';
import { authenticateToken, authorizeRole } from '../middlewares/authMiddleware.js';
import { validateReservation } from '../middlewares/validationMiddleware.js';
import {
  getAllReservations,
  getReservationById,
  createReservation,
  updateReservation,
  deleteReservation,
} from '../controllers/ReservationController.js';

const router = express.Router();

// Routes
router.get('/',authenticateToken, getAllReservations); // Obtenir toutes les réservations
router.get('/:id',authenticateToken, getReservationById); // Obtenir une réservation par ID
router.post('/',validateReservation,authenticateToken, createReservation); // Ajouter une réservation
router.put('/:id',validateReservation,authenticateToken, updateReservation); // Mettre à jour une réservation
router.delete('/:id',authorizeRole(['SuperAdmin']),authenticateToken ,deleteReservation); // Supprimer une réservation

export default router;
