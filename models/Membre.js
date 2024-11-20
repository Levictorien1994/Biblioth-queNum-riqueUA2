import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Membre = sequelize.define('Membre', {
  membre_id: {
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
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'membres',
  timestamps: true,
});

export default Membre;
