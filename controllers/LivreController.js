import LivresMock from '../data/LivresMock.js';

// Récupérer tous les livres
export const getAllLivres = (req, res) => {
  res.status(200).json(LivresMock);
};

// Ajouter un nouveau livre
export const createLivre = (req, res) => {
  const newLivre = { livre_id: LivresMock.length + 1, ...req.body };
  LivresMock.push(newLivre);
  res.status(201).json(newLivre);
};

// Modifier un livre existant
export const updateLivre = (req, res) => {
  const { id } = req.params;
  const livreIndex = LivresMock.findIndex((livre) => livre.livre_id === parseInt(id));
  if (livreIndex === -1) {
    return res.status(404).json({ error: 'Livre non trouvé' });
  }
  LivresMock[livreIndex] = { ...LivresMock[livreIndex], ...req.body };
  res.status(200).json(LivresMock[livreIndex]);
};

// Supprimer un livre
export const deleteLivre = (req, res) => {
  const { id } = req.params;
  const livreIndex = LivresMock.findIndex((livre) => livre.livre_id === parseInt(id));
  if (livreIndex === -1) {
    return res.status(404).json({ error: 'Livre non trouvé' });
  }
  LivresMock.splice(livreIndex, 1);
  res.status(200).json({ message: 'Livre supprimé' });
};
export const getFilteredLivres = (req, res) => {
  const { auteur_id, categorie_id, date_publication, titre, page = 1, limit = 10 } = req.query;

  let filteredLivres = LivresMock;

  // Filtrer par auteur_id
  if (auteur_id) {
    filteredLivres = filteredLivres.filter(
      (livre) => livre.auteur_id === parseInt(auteur_id)
    );
  }

  // Filtrer par categorie_id
  if (categorie_id) {
    filteredLivres = filteredLivres.filter(
      (livre) => livre.categorie_id === parseInt(categorie_id)
    );
  }

  // Filtrer par date_publication
  if (date_publication) {
    filteredLivres = filteredLivres.filter(
      (livre) => livre.date_publication === date_publication
    );
  }

  // Filtrer par titre (recherche partielle)
  if (titre) {
    filteredLivres = filteredLivres.filter((livre) =>
      livre.titre.toLowerCase().includes(titre.toLowerCase())
    );
  }

  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedLivres = filteredLivres.slice(startIndex, endIndex);

  res.status(200).json({
    total: filteredLivres.length,
    page: parseInt(page),
    limit: parseInt(limit),
    data: paginatedLivres,
  });
};
