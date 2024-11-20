import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Emprunt = sequelize.define('Emprunt', {
  emprunt_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  livre_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  membre_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date_emprunt: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  date_retour: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
});

export default Emprunt;
