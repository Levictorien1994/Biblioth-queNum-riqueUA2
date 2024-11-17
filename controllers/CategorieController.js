import CategoriesMock from '../data/CategoriesMock.js';


// Récupérer toutes les catégories
export const getAllCategories = (req, res) => {
  res.status(200).json(CategoriesMock);
};

// Ajouter une nouvelle catégorie
export const createCategorie = (req, res) => {
  const newCategorie = { id: CategoriesMock.length + 1, ...req.body };
  CategoriesMock.push(newCategorie);
  res.status(201).json(newCategorie);
};

// Modifier une catégorie existante
export const updateCategorie = (req, res) => {
  const { id } = req.params;
  const categorieIndex = CategoriesMock.findIndex((categorie) => categorie.id === parseInt(id));
  if (categorieIndex === -1) {
    return res.status(404).json({ error: 'Catégorie non trouvée' });
  }
  CategoriesMock[categorieIndex] = { ...CategoriesMock[categorieIndex], ...req.body };
  res.status(200).json(CategoriesMock[categorieIndex]);
};

// Supprimer une catégorie
export const deleteCategorie = (req, res) => {
  const { id } = req.params;
  const categorieIndex = CategoriesMock.findIndex((categorie) => categorie.id === parseInt(id));
  if (categorieIndex === -1) {
    return res.status(404).json({ error: 'Catégorie non trouvée' });
  }
  CategoriesMock.splice(categorieIndex, 1);
  res.status(200).json({ message: 'Catégorie supprimée' });
};

import LivresMock from '../data/LivresMock.js';

// Récupérer les livres d'une catégorie
export const getLivresByCategorie = (req, res) => {
  const { id } = req.params;
  const categorie = CategoriesMock.find((categorie) => categorie.id === parseInt(id));
  if (!categorie) {
    return res.status(404).json({ error: 'Catégorie non trouvée' });
  }
  const livres = LivresMock.filter((livre) => livre.categorieId === parseInt(id));
  res.status(200).json(livres);
};

