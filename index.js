import express from 'express';
import livreRoutes from './routes/LivreRoutes.js';

const app = express();

app.use(express.json()); // Middleware pour analyser les JSON

// Routes pour les livres
app.use('/api/livres', livreRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
