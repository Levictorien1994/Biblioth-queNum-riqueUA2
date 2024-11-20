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
  auteur_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  categorie_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date_publication: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  isbn: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default Livre;
