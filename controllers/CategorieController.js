import Categorie from '../models/Categorie.js';

// Récupérer toutes les catégories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des catégories' });
  }
};

// Récupérer une catégorie par ID
export const getCategorieById = async (req, res) => {
  try {
    const categorie = await Categorie.findByPk(req.params.id);
    if (!categorie) {
      return res.status(404).json({ error: 'Catégorie non trouvée' });
    }
    res.status(200).json(categorie);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de la catégorie' });
  }
};

// Créer une catégorie
export const createCategorie = async (req, res) => {
  try {
    const categorie = await Categorie.create(req.body);
    res.status(201).json(categorie);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de la catégorie' });
  }
};

// Mettre à jour une catégorie
export const updateCategorie = async (req, res) => {
  try {
    const categorie = await Categorie.findByPk(req.params.id);
    if (!categorie) {
      return res.status(404).json({ error: 'Catégorie non trouvée' });
    }
    await categorie.update(req.body);
    res.status(200).json(categorie);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour de la catégorie' });
  }
};

// Supprimer une catégorie
export const deleteCategorie = async (req, res) => {
  try {
    const categorie = await Categorie.findByPk(req.params.id);
    if (!categorie) {
      return res.status(404).json({ error: 'Catégorie non trouvée' });
    }
    await categorie.destroy();
    res.status(200).json({ message: 'Catégorie supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de la catégorie' });
  }
};
