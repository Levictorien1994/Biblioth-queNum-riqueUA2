import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Livre = sequelize.define('Livre', {
  livre_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  categorie_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  auteur_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Livre;
