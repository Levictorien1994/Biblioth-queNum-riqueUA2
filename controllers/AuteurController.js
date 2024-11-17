import AuteursMock from '../data/AuteursMock.js';

// Récupérer tous les auteurs
export const getAllAuteurs = (req, res) => {
  res.status(200).json(AuteursMock);
};

// Ajouter un nouvel auteur
export const createAuteur = (req, res) => {
  const newAuteur = { id: AuteursMock.length + 1, ...req.body };
  AuteursMock.push(newAuteur);
  res.status(201).json(newAuteur);
};

// Modifier un auteur existant
export const updateAuteur = (req, res) => {
  const { id } = req.params;
  const auteurIndex = AuteursMock.findIndex((auteur) => auteur.id === parseInt(id));
  if (auteurIndex === -1) {
    return res.status(404).json({ error: 'Auteur non trouvé' });
  }
  AuteursMock[auteurIndex] = { ...AuteursMock[auteurIndex], ...req.body };
  res.status(200).json(AuteursMock[auteurIndex]);
};

// Supprimer un auteur
export const deleteAuteur = (req, res) => {
  const { id } = req.params;
  const auteurIndex = AuteursMock.findIndex((auteur) => auteur.id === parseInt(id));
  if (auteurIndex === -1) {
    return res.status(404).json({ error: 'Auteur non trouvé' });
  }
  AuteursMock.splice(auteurIndex, 1);
  res.status(200).json({ message: 'Auteur supprimé' });
};
