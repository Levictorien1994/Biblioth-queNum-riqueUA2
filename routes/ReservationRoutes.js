import express from 'express';
import {
  getAllReservations,
  getReservationById,
  createReservation,
  updateReservation,
  deleteReservation,
} from '../controllers/ReservationController.js';

const router = express.Router();

// Routes
router.get('/', getAllReservations); // Obtenir toutes les réservations
router.get('/:id', getReservationById); // Obtenir une réservation par ID
router.post('/', createReservation); // Ajouter une réservation
router.put('/:id', updateReservation); // Mettre à jour une réservation
router.delete('/:id', deleteReservation); // Supprimer une réservation

export default router;
