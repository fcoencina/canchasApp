const express = require('express');
const router  = express.Router();
const {
    createInstalacion,
    updateInstalacion,
    getInstalacionById,
    deleteInstalacion,
    getInstalaciones
} = require("../controllers/instalacionController");

// Aquí van los endpoints 

router.post("/createinstalacion", async (req, res) =>{
    
    try {
        const instalacionAttributes = {
            tipo: req.body.tipo,
            ubicacion: req.body.ubicacion,
            fotografia: req.body.fotografia,
            disponibilidad: req.body.disponibilidad
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

router.patch("/updateinstalacion", async (req, res) => {

    try {
        const instalacionAttributes = {
            tipo: req.body.tipo,
            ubicacion: req.body.ubicacion,
            fotografia: req.body.fotografia,
            disponibilidad: req.body.disponibilidad
        }
        const instalacion = await updateInstalacion(req.body.id, instalacionAttributes);

        if (!instalacion) {
            return res.statusCode(500).json({message: "No se pudo actualizar la instalacion"});
        }

        return res.json({message: "Instalacion actualizada exitosamente"});
    } catch (error) { 
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
});

router.delete("/deleteinstalacion", async (req, res) => {
    
    try {
        
        const instalacion = await deleteInstalacion(req.body.id);

        if (!instalacion) {
            return res.statusCode(500).json({message: "No se pudo eliminar la instalacion"});
        }

        return res.json({message: "Instalacion eliminada exitosamente"});
    } catch (error) { 
        return res.status(500).json({ message: 'Error interno del servidor' });
    }

});

router.get("/getinstalacion", async (req, res) => {

    try {
        
        const user = await getInstalacionById(req.body.id);
        

        if (!user) {
            return res.statusCode(500).json({message: "No se pudo encontrar la instalacion"});
        }

        return res.json(user);
    } catch (error) { 
        return res.status(500).json({ message: 'Error interno del servidor' });
    }

});






module.exports = router;

