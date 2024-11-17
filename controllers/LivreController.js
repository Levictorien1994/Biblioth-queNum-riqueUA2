import LivresMock from '../data/LivresMock.js';

// Récupérer tous les livres
export const getAllLivres = (req, res) => {
  res.status(200).json(LivresMock);
};

// Ajouter un nouveau livre
export const createLivre = (req, res) => {
  const newLivre = { id: LivresMock.length + 1, ...req.body };
  LivresMock.push(newLivre);
  res.status(201).json(newLivre);
};

// Modifier un livre existant
export const updateLivre = (req, res) => {
  const { id } = req.params;
  const livreIndex = LivresMock.findIndex((livre) => livre.id === parseInt(id));
  if (livreIndex === -1) {
    return res.status(404).json({ error: 'Livre non trouvé' });
  }
  LivresMock[livreIndex] = { ...LivresMock[livreIndex], ...req.body };
  res.status(200).json(LivresMock[livreIndex]);
};

// Supprimer un livre
export const deleteLivre = (req, res) => {
  const { id } = req.params;
  const livreIndex = LivresMock.findIndex((livre) => livre.id === parseInt(id));
  if (livreIndex === -1) {
    return res.status(404).json({ error: 'Livre non trouvé' });
  }
  LivresMock.splice(livreIndex, 1);
  res.status(200).json({ message: 'Livre supprimé' });
};
