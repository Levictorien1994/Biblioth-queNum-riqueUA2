import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Reservation = sequelize.define('Reservation', {
  reservation_id: {
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
  date_reservation: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default Reservation;
