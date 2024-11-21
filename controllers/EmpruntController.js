import Emprunt from '../models/Emprunt.js';

// Récupérer tous les emprunts
export const getAllEmprunts = async (req, res) => {
  try {
    const emprunts = await Emprunt.findAll();
    res.status(200).json(emprunts);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des emprunts' });
  }
};

// Récupérer un emprunt par ID
export const getEmpruntById = async (req, res) => {
  try {
    const emprunt = await Emprunt.findByPk(req.params.id);
    if (!emprunt) {
      return res.status(404).json({ error: 'Emprunt non trouvé' });
    }
    res.status(200).json(emprunt);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de l\'emprunt' });
  }
};

// Créer un emprunt
export const createEmprunt = async (req, res) => {
  try {
    const emprunt = await Emprunt.create(req.body);
    res.status(201).json(emprunt);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de l\'emprunt' });
  }
};

// Mettre à jour un emprunt
export const updateEmprunt = async (req, res) => {
  try {
    const emprunt = await Emprunt.findByPk(req.params.id);
    if (!emprunt) {
      return res.status(404).json({ error: 'Emprunt non trouvé' });
    }
    await emprunt.update(req.body);
    res.status(200).json(emprunt);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'emprunt' });
  }
};

// Supprimer un emprunt
export const deleteEmprunt = async (req, res) => {
  try {
    const emprunt = await Emprunt.findByPk(req.params.id);
    if (!emprunt) {
      return res.status(404).json({ error: 'Emprunt non trouvé' });
    }
    await emprunt.destroy();
    res.status(200).json({ message: 'Emprunt supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de l\'emprunt' });
  }
};
