import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Categorie = sequelize.define('Categorie', {
  categorie_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Categorie;
