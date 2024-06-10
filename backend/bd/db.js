
const { Sequelize } = require('sequelize');

// Configura la conexión a la base de datos
const sequelize = new Sequelize('canchasApp', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// Verifica la conexión
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connected to MySQL.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

// Sincronizar el modelo con la base de datos
async function syncDatabase() {
  try {
    /*  Con alter: true, Sequelize aplicará automáticamente los
    cambios al modelo en la tabla existente.
    force: true, borrará y recreará las tablas cada vez que el
    servidor se inicie, lo que puede ser útil durante el desarrollo,
    pero nuevamente ten cuidado con los datos existentes en la base
    de datos.
    */
    await sequelize.sync({ alter: true });
    console.log('Sincronización exitosa.');
  } catch (error) {
    console.error('Error al sincronizar:', error);
  }
}

module.exports = {
  sequelize,
  testConnection,
  syncDatabase
}
