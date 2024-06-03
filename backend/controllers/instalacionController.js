
const Instalacion = require('../models/Instalacion');

async function createInstalacion(instalacionAttributes) {
    try {
        //create retorna el registro si se pudo crear.
        const instalacion = await Instalacion.create(instalacionAttributes);

        return instalacion;
    } catch (error) {
        return error;
    }
}

module.exports = {
    createInstalacion
}
