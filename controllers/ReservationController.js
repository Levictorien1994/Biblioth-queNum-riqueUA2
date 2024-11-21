import Reservation from '../models/Reservation.js';

// Récupérer toutes les réservations
export const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.findAll();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des réservations' });
  }
};

// Récupérer une réservation par ID
export const getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findByPk(req.params.id);
    if (!reservation) {
      return res.status(404).json({ error: 'Réservation non trouvée' });
    }
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de la réservation' });
  }
};

// Créer une réservation
export const createReservation = async (req, res) => {
  try {
    const reservation = await Reservation.create(req.body);
    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de la réservation' });
  }
};

// Mettre à jour une réservation
export const updateReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByPk(req.params.id);
    if (!reservation) {
      return res.status(404).json({ error: 'Réservation non trouvée' });
    }
    await reservation.update(req.body);
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour de la réservation' });
  }
};

// Supprimer une réservation
export const deleteReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByPk(req.params.id);
    if (!reservation) {
      return res.status(404).json({ error: 'Réservation non trouvée' });
    }
    await reservation.destroy();
    res.status(200).json({ message: 'Réservation supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de la réservation' });
  }
};
