const express = require('express');
const router  = express.Router();
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
        const instalacionAttributes = {
            fecha: req.body.fecha,
            bloque: req.body.bloque,
            estado: req.body.estado,
            userId: req.body.userId,
            instalacionId: req.body.instalacionId
            
        }
        const instalacion = await createInstalacion(instalacionAttributes);

        if (!instalacion) {
            return res.statusCode(500).json({message: "No se pudo registrar la instalacion"});
        }

        return res.json({message: "Instalacion creada exitosamente"});
    } catch (error) {
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
});

module.exports = router;