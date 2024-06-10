
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const {
    updateUser,
    deleteUser,
    getUserById
} = require("../controllers/userController");

// Aquí van los endpoints

router.patch("/updateuser", async (req, res) => {
    const password = req.body.password;
    
    try {
        const bcryptPassword = await bcrypt.hash(password, 10);
        const userAttributes = {
            username: req.body.username,
            password: bcryptPassword,
            email: req.body.email
        }
        const user = await updateUser(req.body.id, userAttributes);

        if (!user) {
            return res.statusCode(500).json({message: "No se pudo actualizar el usuario"});
        }

        return res.json({message: "Usuario actualizado exitosamente"});
    } catch (error) { 
        return res.status(500).json({ message: 'Error interno del servidor' });
    }

});

router.delete("/deleteuser", async (req, res) => {
    
    try {
        
        const user = await deleteUser(req.body.id);

        if (!user) {
            return res.statusCode(500).json({message: "No se pudo eliminar el usuario"});
        }

        return res.json({message: "Usuario eliminado exitosamente"});
    } catch (error) { 
        return res.status(500).json({ message: 'Error interno del servidor' });
    }


});

router.get("/getuser", async (req, res) => {

    try {
        
        const user = await getUserById(req.body.id);
        

        if (!user) {
            return res.statusCode(500).json({message: "No se pudo encontrar el usuario"});
        }

        return res.json(user);
    } catch (error) { 
        return res.status(500).json({ message: 'Error interno del servidor' });
    }

});



module.exports = router;
