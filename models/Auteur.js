import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Auteur = sequelize.define('Auteur', {
  auteur_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nationalite: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default Auteur;
