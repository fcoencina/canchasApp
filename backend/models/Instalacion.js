
const { DataTypes } = require('sequelize');
const { sequelize } = require('../bd/db');

const Instalacion = sequelize.define('Instalacion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: { type: DataTypes.STRING, allowNull: false },
    tipo: { type: DataTypes.STRING, allowNull: false },
    ubicacion: { type: DataTypes.STRING, allowNull: false },
    fotografia: { type: DataTypes.STRING, allowNull: false},
    disponibilidad: { type: DataTypes.STRING, allowNull: false}
  }/*, {
    tableName: 'usuarios' // Nombre personalizado de la tabla
    timestamps: false, // Deshabilitar los atributos createdAt y updatedAt
  }*/
);

module.exports = Instalacion;
