import express from 'express';

import './models/relation.js';
import sequelize from './config/database.js';
import auteurRoutes from './routes/AuteurRoutes.js';
import paiementRoutes from './routes/PaiementRoutes.js';
import reservationRoutes from './routes/ReservationRoutes.js';
import empruntRoutes from './routes/EmpruntRoutes.js';
import utilisateurRoutes from './routes/UtilisateurRoutes.js';
import roleRoutes from './routes/RoleRoutes.js';
import livreRoutes from './routes/livreRoutes.js';
import avisRoutes from './routes/AvisRoutes.js';
import categorieRoutes  from './routes/CategorieRoutes.js';
import testRoutes from './routes/TestRoutes.js';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import bodyParser from 'body-parser';



const app = express();
// Configuration des middlewares
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.json()); // Analyser les requêtes JSON
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.json()); // Middleware pour analyser les JSON
// Configuration des middlewares




//rotes
app.use('/api/auteurs', auteurRoutes);
app.use('/api/paiements', paiementRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/emprunts', empruntRoutes);
app.use('/api/utilisateurs', utilisateurRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/livres', livreRoutes);
app.use('/api/avis', avisRoutes);
app.use('/api/categories', categorieRoutes);
app.use('/api/tests', testRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
(async () => {
  try {
    await sequelize.sync({ alter: false }); // Met `force: true` si vous voulez recréer les tables
    console.log('Base de données synchronisée.');
  } catch (error) {
    console.error('Erreur de synchronisation de la base de données :', error);
  }
})();
 // Gestion des erreurs 404 pour les routes non définies
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route non trouvée' });
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Erreur interne du serveur' });
});
 