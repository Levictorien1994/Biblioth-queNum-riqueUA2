import AuteursMock from '../data/AuteursMock.js';
import LivresMock from '../data/LivresMock.js';

// Récupérer tous les auteurs
export const getAllAuteurs = (req, res) => {
  res.status(200).json(AuteursMock);
};

// Ajouter un nouvel auteur
export const createAuteur = (req, res) => {
  const newAuteur = { auteur_id: AuteursMock.length + 1, ...req.body };
  AuteursMock.push(newAuteur);
  res.status(201).json(newAuteur);
};

// Modifier un auteur existant
export const updateAuteur = (req, res) => {
  const { id } = req.params;
  const auteurIndex = AuteursMock.findIndex((auteur) => auteur.auteur_id === parseInt(id));
  if (auteurIndex === -1) {
    return res.status(404).json({ error: 'Auteur non trouvé' });
  }
  AuteursMock[auteurIndex] = { ...AuteursMock[auteurIndex], ...req.body };
  res.status(200).json(AuteursMock[auteurIndex]);
};

// Supprimer un auteur
export const deleteAuteur = (req, res) => {
  const { id } = req.params;
  const auteurIndex = AuteursMock.findIndex((auteur) => auteur.auteur_id === parseInt(id));
  if (auteurIndex === -1) {
    return res.status(404).json({ error: 'Auteur non trouvé' });
  }
  AuteursMock.splice(auteurIndex, 1);
  res.status(200).json({ message: 'Auteur supprimé' });
};
export const getLivresByAuteur = (req, res) => {
  const { id } = req.params;
  const auteur = AuteursMock.find((auteur) => auteur.auteur_id === parseInt(id));
  if (!auteur) {
    return res.status(404).json({ error: 'Auteur non trouvé' });
  }
  const livres = LivresMock.filter((livre) => livre.auteur_id === parseInt(id));
  res.status(200).json(livres);
};
