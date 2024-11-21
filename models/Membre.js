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
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
}, {
  
});

export default Membre;
