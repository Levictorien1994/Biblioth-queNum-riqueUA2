import Avis from '../models/Avis.js';

// Récupérer tous les avis
export const getAllAvis = async (req, res) => {
  try {
    const avis = await Avis.findAll();
    res.status(200).json(avis);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des avis' });
  }
};

// Récupérer un avis par ID
export const getAvisById = async (req, res) => {
  try {
    const avis = await Avis.findByPk(req.params.id);
    if (!avis) {
      return res.status(404).json({ error: 'Avis non trouvé' });
    }
    res.status(200).json(avis);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de l\'avis' });
  }
};

// Créer un avis
export const createAvis = async (req, res) => {
  try {
    const avis = await Avis.create(req.body);
    res.status(201).json(avis);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de l\'avis' });
  }
};

// Mettre à jour un avis
export const updateAvis = async (req, res) => {
  try {
    const avis = await Avis.findByPk(req.params.id);
    if (!avis) {
      return res.status(404).json({ error: 'Avis non trouvé' });
    }
    await avis.update(req.body);
    res.status(200).json(avis);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'avis' });
  }
};

// Supprimer un avis
export const deleteAvis = async (req, res) => {
  try {
    const avis = await Avis.findByPk(req.params.id);
    if (!avis) {
      return res.status(404).json({ error: 'Avis non trouvé' });
    }
    await avis.destroy();
    res.status(200).json({ message: 'Avis supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de l\'avis' });
  }
};
