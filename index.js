import express from 'express';
import livreRoutes from './routes/LivreRoutes.js';
import auteurRoutes from './routes/AuteurRoutes.js';
import categorieRoutes from './routes/CategorieRoutes.js';
import empruntRoutes from './routes/EmpruntRoutes.js';
import membreRoutes from './routes/MembreRoutes.js';
import reservationRoutes from './routes/ReservationRoutes.js';
import avisRoutes from './routes/AvisRoutes.js';
import sequelize from './config/database.js';
import './models/relation.js';




const app = express();

app.use(express.json()); // Middleware pour analyser les JSON

// Routes pour les livres
app.use('/api/livres', livreRoutes);
app.use('/api/auteurs', auteurRoutes);
app.use('/api/categories', categorieRoutes);
app.use('/api/emprunts', empruntRoutes);
app.use('/api/membres', membreRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/avis', avisRoutes);
(async () => {
  try {
    await sequelize.sync({ force: false}); // Mettre "true" pour recréer les tables
    console.log('Base de données synchronisée avec succès.');
  } catch (error) {
    console.error('Erreur lors de la synchronisation de la base de données :', error);
  }
})();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
