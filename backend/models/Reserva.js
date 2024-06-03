
const { DataTypes } = require('sequelize');
const { sequelize } = require('../bd/db');

const Reserva = sequelize.define('Reserva', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    fecha: { type: DataTypes.STRING, allowNull: false},
    bloque: { type: DataTypes.STRING, allowNull: false},
    estado: { type: DataTypes.STRING, allowNull: false}
  }/*, {
    tableName: 'usuarios' // Nombre personalizado de la tabla
    timestamps: false, // Deshabilitar los atributos createdAt y updatedAt
  }*/
);

module.exports = Reserva;
