import express from 'express';
import { getAllReservations, createReservation, updateReservation, deleteReservation, getFilteredReservations } from '../controllers/ReservationController.js';

const router = express.Router();

router.get('/', getAllReservations); // Obtenir toutes les réservations
router.get('/filter', getFilteredReservations); // Filtrer les réservations
router.post('/', createReservation); // Ajouter une réservation
router.put('/:id', updateReservation); // Modifier une réservation
router.delete('/:id', deleteReservation); // Supprimer une réservation

export default router;
