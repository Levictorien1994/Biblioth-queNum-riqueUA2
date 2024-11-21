import Livre from '../models/Livre.js';

// Récupérer tous les livres
export const getAllLivres = async (req, res) => {
  try {
    const livres = await Livre.findAll();
    res.status(200).json(livres);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des livres' });
  }
};

// Récupérer un livre par ID
export const getLivreById = async (req, res) => {
  try {
    const livre = await Livre.findByPk(req.params.id);
    if (!livre) {
      return res.status(404).json({ error: 'Livre non trouvé' });
    }
    res.status(200).json(livre);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération du livre' });
  }
};

// Créer un livre
export const createLivre = async (req, res) => {
  try {
    const livre = await Livre.create(req.body);
    res.status(201).json(livre);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création du livre' });
  }
};

// Mettre à jour un livre
export const updateLivre = async (req, res) => {
  try {
    const livre = await Livre.findByPk(req.params.id);
    if (!livre) {
      return res.status(404).json({ error: 'Livre non trouvé' });
    }
    await livre.update(req.body);
    res.status(200).json(livre);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour du livre' });
  }
};

// Supprimer un livre
export const deleteLivre = async (req, res) => {
  try {
    const livre = await Livre.findByPk(req.params.id);
    if (!livre) {
      return res.status(404).json({ error: 'Livre non trouvé' });
    }
    await livre.destroy();
    res.status(200).json({ message: 'Livre supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression du livre' });
  }
};
