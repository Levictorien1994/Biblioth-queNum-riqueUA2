import Auteur from '../models/Auteur.js';

// Récupérer tous les auteurs
export const getAllAuteurs = async (req, res) => {
  try {
    const auteurs = await Auteur.findAll();
    res.status(200).json(auteurs);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des auteurs' });
  }
};

// Récupérer un auteur par ID
export const getAuteurById = async (req, res) => {
  try {
    const auteur = await Auteur.findByPk(req.params.id);
    if (!auteur) {
      return res.status(404).json({ error: 'Auteur non trouvé' });
    }
    res.status(200).json(auteur);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de l\'auteur' });
  }
};

// Créer un auteur
export const createAuteur = async (req, res) => {
  try {
    const auteur = await Auteur.create(req.body);
    res.status(201).json(auteur);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de l\'auteur' });
  }
};

// Mettre à jour un auteur
export const updateAuteur = async (req, res) => {
  try {
    const auteur = await Auteur.findByPk(req.params.id);
    if (!auteur) {
      return res.status(404).json({ error: 'Auteur non trouvé' });
    }
    await auteur.update(req.body);
    res.status(200).json(auteur);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'auteur' });
  }
};

// Supprimer un auteur
export const deleteAuteur = async (req, res) => {
  try {
    const auteur = await Auteur.findByPk(req.params.id);
    if (!auteur) {
      return res.status(404).json({ error: 'Auteur non trouvé' });
    }
    await auteur.destroy();
    res.status(200).json({ message: 'Auteur supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de l\'auteur' });
  }
};
