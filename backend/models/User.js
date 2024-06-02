
const { DataTypes } = require('sequelize');
const { sequelize } = require('../bd/db');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false }
  }/*, {
    tableName: 'usuarios' // Nombre personalizado de la tabla
    timestamps: false, // Deshabilitar los atributos createdAt y updatedAt
  }*/
);

module.exports = User;
