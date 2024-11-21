import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Emprunt = sequelize.define('Emprunt', {
  emprunt_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  utilisateur_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  livre_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date_emprunt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  date_retour: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

export default Emprunt;
