import express from 'express';

const router = express.Router();

// Données fictives
const mockLivres = [
  { id: 1, titre: '1984', auteur: 'George Orwell', categorie: 'Dystopie' },
  { id: 2, titre: 'Le Meilleur des mondes', auteur: 'Aldous Huxley', categorie: 'Science-fiction' },
];

// Routes pour les livres
router.get('/', (req, res) => {
  res.json(mockLivres);
});

router.post('/', (req, res) => {
  const newLivre = { id: mockLivres.length + 1, ...req.body };
  mockLivres.push(newLivre);
  res.status(201).json(newLivre);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const livreIndex = mockLivres.findIndex((livre) => livre.id === parseInt(id));
  if (livreIndex === -1) {
    return res.status(404).json({ error: 'Livre non trouvé' });
  }
  mockLivres[livreIndex] = { ...mockLivres[livreIndex], ...req.body };
  res.status(200).json(mockLivres[livreIndex]);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const livreIndex = mockLivres.findIndex((livre) => livre.id === parseInt(id));
  if (livreIndex === -1) {
    return res.status(404).json({ error: 'Livre non trouvé' });
  }
  mockLivres.splice(livreIndex, 1);
  res.status(200).json({ message: 'Livre supprimé' });
});

export default router;
