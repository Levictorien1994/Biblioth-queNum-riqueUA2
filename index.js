import express from 'express';

import './models/relation.js';
import sequelize from './config/database.js';

const app = express();

app.use(express.json()); // Middleware pour analyser les JSON



const PORT = 3000;
app.get('/', (req, res) => {
  res.send('API en cours de développement...');
});
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
(async () => {
  try {
    await sequelize.sync({ alter: true }); // Met `force: true` si vous voulez recréer les tables
    console.log('Base de données synchronisée.');
  } catch (error) {
    console.error('Erreur de synchronisation de la base de données :', error);
  }
})();
