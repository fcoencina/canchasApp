
// Importar los modelos
const User = require("../models/User");
const Instalacion = require('../models/Instalacion');
const Reserva = require('../models/Reserva');

// Asociaciones
User.hasMany(Reserva, { foreignKey: 'userId' }); // Un usuario puede tener muchas reservas
Reserva.belongsTo(User, { foreignKey: 'userId' }); // Una reserva pertenece a un usuario

Instalacion.hasMany(Reserva, { foreignKey: 'instalacionId' }); // Una instalación puede tener muchas reservas
Reserva.belongsTo(Instalacion, { foreignKey: 'instalacionId' }); // Una reserva pertenece a una instalación





