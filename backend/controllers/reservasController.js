
const Reserva = require("../models/Reserva");

async function createReserva(reservaAttributes) {
    try {
        //create retorna el registro si se pudo crear.
        const reserva = await Reserva.create(reservaAttributes);

        return reserva;
    } catch (error) {
        return error;
    }
}

async function updateReserva(_id, reservaAttributes) {
    try {
        //update retorna 0 si no encuentra
        const tryUpdate = await Reserva.update(
            reservaAttributes,
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

async function getReservaById(_id) {
    try {
        //findOne retorna null si no encuentra
        const Reserva = await Reserva.findOne({
            where: {
                id: _id,
            }
        });
        // Retornar el usuario
        return Reserva;
    } catch (error) {
        return error;
    }
}

async function deleteReserva(_id) {
    try {
        //destroy retorna 0 si no encuentra
        const tryDelete = await Reserva.destroy({
            where: {
                id: _id
            }
        });

        return tryDelete;
    } catch (error) {
        return error;
    }
}

async function getReservas() {
    try {
        //findAll retorna null si no encuentra
        const Reservas = await Reserva.findAll();

        // Retornar los usuarios
        return Reservas;
    } catch (error) {
        return error;
    }
}


module.exports = {
    createReserva,
    updateReserva,
    getReservaById,
    deleteReserva,
    getReservas
}