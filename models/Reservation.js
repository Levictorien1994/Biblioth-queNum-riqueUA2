import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Reservation = sequelize.define('Reservation', {
  reservation_id: {
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
  date_reservation: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

export default Reservation;
