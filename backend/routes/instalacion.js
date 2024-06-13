const express = require('express');
const router  = require('express');
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
        const bcryptPassword = await bcrypt.hash(password, 10);
        const userAttributes = {
            username: req.body.username,
            password: bcryptPassword,
            email: req.body.email,
            profile: req.body.profile
        }
        const user = await createUser(userAttributes);

        if (!user) {
            return res.statusCode(500).json({message: "No se pudo registrar el usuario"});
        }

        return res.json({message: "Usuario creado exitosamente"});
    } catch (error) {
        return res.status(500).json({ message: 'Error interno del servidor' });
    }



});