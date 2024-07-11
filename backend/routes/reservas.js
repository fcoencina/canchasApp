
const express = require('express');
const { User } = require('../models/User');
const router  = express.Router();
const { getUserById } = require("../controllers/userController");
const {
    createReserva,
    updateReserva,
    getReservaById,
    deleteReserva,
    getReservas
} = require("../controllers/reservasController");

// Aquí van los endpoints

router.post("/createreserva", async (req, res) =>{

    try {
        const reservaAttributes = {
            fecha: req.body.fecha,
            bloque: req.body.bloque,
            estado: req.body.estado,
            userId: req.body.userId,
            instalacionId: req.body.instalacionId,
            instalacion: req.body.instalacion
        }

        const reserva = await createReserva(reservaAttributes);

        if (!reserva) {
            return res.statusCode(500).json({message: "No se pudo registrar la reserva"});
        }

        return res.json({message: "Reserva creada exitosamente"});
    } catch (error) {
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
});

router.patch("/updatereserva", async (req, res) => {

    try {
        const reservaAttributes = {
            fecha: req.body.fecha,
            bloque: req.body.bloque,
            estado: req.body.estado
        }
        const reserva = await updateReserva(req.body.id, reservaAttributes);

        if (!reserva) {
            return res.statusCode(500).json({message: "No se pudo actualizar la reserva"});
        }

        return res.json({message: "Reserva actualizada exitosamente"});
    } catch (error) {
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
});

router.delete("/deletereserva/:id", async (req, res) => {

    try {

        const reserva = await deleteReserva(req.params.id);

        if (!reserva) {
            return res.statusCode(500).json({message: "No se pudo eliminar la reserva"});
        }

        return res.json({message: "Reserva eliminada exitosamente"});
    } catch (error) {
        return res.status(500).json({ message: 'Error interno del servidor' });
    }

});

router.get("/getreserva/:id", async (req, res) => {

    try {
        console.log(req.params.id)
        const reserva = await getReservaById(req.params.id);


        if (!reserva) {
            return res.statusCode(500).json({message: "No se pudo encontrar la reserva"});
        }

        return res.json(reserva);
    } catch (error) {
        return res.status(500).json({ message: 'Error interno del servidor' });
    }

});

router.get("/getreservas", async (req, res) => {

    try {

        const reservas = await getReservas();


        if (!reservas) {
            return res.statusCode(500).json({message: "No se pudo encontrar las reservas"});
        }

        return res.json(reservas);
    } catch (error) {
        return res.status(500).json({ message: 'Error interno del servidor' });
    }

});

router.get("/getreservasbyuser/:userId", async (req, res) => {

    try {

        const user = await getUserById(req.params.userId);
        console.log(user);

        if (!user) {
          return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const reservas = await user.getReservas();

        if (!reservas) {
            return res.statusCode(500).json({message: "No se pudo encontrar las reservas"});
        }

        res.json(reservas);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }

});

module.exports = router;
