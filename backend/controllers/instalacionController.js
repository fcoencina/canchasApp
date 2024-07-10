
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

async function updateInstalacion(_id, instalacionAttributes) {
    try {
        //update retorna 0 si no encuentra
        const tryUpdate = await Instalacion.update(
            instalacionAttributes,
            {
                where: {
                    id: _id
                }
            }
        );

        return tryUpdate;
    } catch (error) {
        return error;
    }
}

async function getInstalacionById(_id) {
    try {
        //findOne retorna null si no encuentra
        const instalacion = await Instalacion.findOne({
            where: {
                id: _id,
            }
        });
        // Retornar la instalacion
        return instalacion;
    } catch (error) {
        return error;
    }
}

async function deleteInstalacion(_id) {
    try {
        //destroy retorna 0 si no encuentra
        const tryDelete = await Instalacion.destroy({
            where: {
                id: _id
            }
        });

        return tryDelete;
    } catch (error) {
        return error;
    }
}

async function getInstalaciones() {
    try {
        //findAll retorna null si no encuentra
        const instalaciones = await Instalacion.findAll();

        // Retornar las instalaciones
        return instalaciones;
    } catch (error) {
        return error;
    }
}

module.exports = {
    createInstalacion,
    updateInstalacion,
    getInstalacionById,
    deleteInstalacion,
    getInstalaciones
}
