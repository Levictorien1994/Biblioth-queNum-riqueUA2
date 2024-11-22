import express from 'express';
import Auteur from '../models/Auteur.js';
import Livre from '../models/Livre.js';
import Utilisateur from '../models/Utilisateur.js';
import Reservation from '../models/Reservation.js';
import Emprunt from '../models/Emprunt.js';
import Avis from '../models/Avis.js';
import Categorie from '../models/Categorie.js';

const router = express.Router();

// Récupérer tous les livres d'un auteur
router.get('/auteur/:id/livres', async (req, res) => {
  try {
    const auteur = await Auteur.findByPk(req.params.id, { include: Livre });
    if (!auteur) return res.status(404).json({ error: 'Auteur non trouvé' });
    res.status(200).json(auteur.Livres);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des livres.' });
  }
});

// Récupérer toutes les réservations d'un utilisateur
router.get('/utilisateur/:id/reservations', async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByPk(req.params.id, { include: Reservation });
    if (!utilisateur) return res.status(404).json({ error: 'Utilisateur non trouvé' });
    res.status(200).json(utilisateur.Reservations);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des réservations.' });
  }
});

// Récupérer tous les avis sur un livre
router.get('/livre/:id/avis', async (req, res) => {
  try {
    const livre = await Livre.findByPk(req.params.id, { include: Avis });
    if (!livre) return res.status(404).json({ error: 'Livre non trouvé' });
    res.status(200).json(livre.Avis);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des avis.' });
  }
});

// Récupérer tous les emprunts d'un utilisateur
router.get('/utilisateur/:id/emprunts', async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByPk(req.params.id, { include: Emprunt });
    if (!utilisateur) return res.status(404).json({ error: 'Utilisateur non trouvé' });
    res.status(200).json(utilisateur.Emprunts);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des emprunts.' });
  }
});
// Récupérer tous les livres d'une catégorie
router.get('/categorie/:id/livres', async (req, res) => {
  try {
    const categorie = await Categorie.findByPk(req.params.id, { include: Livre });
    if (!categorie) {
      return res.status(404).json({ error: 'Catégorie non trouvée.' });
    }
    res.status(200).json(categorie.Livres);
  } catch (error) {
    console.error('Erreur lors de la récupération des livres de la catégorie :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des livres de la catégorie.' });
  }
});


export default router;
