import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Avis = sequelize.define('Avis', {
  avis_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  membre_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  livre_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  note: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
  commentaire: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

export default Avis;
