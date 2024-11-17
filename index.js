import express from 'express';
import livreRoutes from './routes/LivreRoutes.js';
import auteurRoutes from './routes/AuteurRoutes.js';
import categorieRoutes from './routes/CategorieRoutes.js';

const app = express();

app.use(express.json()); // Middleware pour analyser les JSON

// Routes pour les livres
app.use('/api/livres', livreRoutes);
// Routes pour les auteurs
app.use('/api/auteurs', auteurRoutes);
// Routes pour les catégories
app.use('/api/categories', categorieRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
