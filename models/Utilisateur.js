import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Utilisateur = sequelize.define('Utilisateur', {
  utilisateur_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom_utilisateur: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  mot_de_passe: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Utilisateur;
