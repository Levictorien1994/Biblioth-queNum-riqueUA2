import ReservationsMock from '../data/ReservationsMock.js';
import MembresMock from '../data/MembresMock.js';
import LivresMock from '../data/LivresMock.js';

// Récupérer toutes les réservations
export const getAllReservations = (req, res) => {
  res.status(200).json(ReservationsMock);
};

// Ajouter une nouvelle réservation
export const createReservation = (req, res) => {
  const { livre_id, membre_id, date_reservation } = req.body;

  const livre = LivresMock.find((l) => l.livre_id === livre_id);
  const membre = MembresMock.find((m) => m.membre_id === membre_id);

  if (!livre) return res.status(404).json({ error: 'Livre non trouvé' });
  if (!membre) return res.status(404).json({ error: 'Membre non trouvé' });

  const newReservation = {
    reservation_id: ReservationsMock.length + 1,
    livre_id,
    membre_id,
    date_reservation,
    statut: 'En attente',
  };

  ReservationsMock.push(newReservation);
  res.status(201).json(newReservation);
};

// Modifier une réservation
export const updateReservation = (req, res) => {
  const { id } = req.params;
  const reservationIndex = ReservationsMock.findIndex((r) => r.reservation_id === parseInt(id));
  if (reservationIndex === -1) return res.status(404).json({ error: 'Réservation non trouvée' });

  ReservationsMock[reservationIndex] = { ...ReservationsMock[reservationIndex], ...req.body };
  res.status(200).json(ReservationsMock[reservationIndex]);
};

// Supprimer une réservation
export const deleteReservation = (req, res) => {
  const { id } = req.params;
  const reservationIndex = ReservationsMock.findIndex((r) => r.reservation_id === parseInt(id));
  if (reservationIndex === -1) return res.status(404).json({ error: 'Réservation non trouvée' });

  ReservationsMock.splice(reservationIndex, 1);
  res.status(200).json({ message: 'Réservation supprimée' });
};
// Récupérer les réservations avec des filtres
export const getFilteredReservations = (req, res) => {
    const { membre_id, livre_id, statut, page = 1, limit = 10 } = req.query;
  
    let filteredReservations = ReservationsMock;
  
    // Filtrer par membre_id
    if (membre_id) {
      filteredReservations = filteredReservations.filter(
        (reservation) => reservation.membre_id === parseInt(membre_id)
      );
    }
  
    // Filtrer par livre_id
    if (livre_id) {
      filteredReservations = filteredReservations.filter(
        (reservation) => reservation.livre_id === parseInt(livre_id)
      );
    }
  
    // Filtrer par statut
    if (statut) {
      filteredReservations = filteredReservations.filter(
        (reservation) => reservation.statut === statut
      );
    }
  
    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedReservations = filteredReservations.slice(startIndex, endIndex);
  
    res.status(200).json({
      total: filteredReservations.length,
      page: parseInt(page),
      limit: parseInt(limit),
      data: paginatedReservations,
    });
  };