
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const {createUser} = require("../controllers/userController");

router.post("/signup", async (req, res) => {
    const password = req.body.password;

    try {
        const bcryptPassword = await bcrypt.hash(password, 10);
        const userAttributes = {
            username: req.body.username,
            password: bcryptPassword,
            email: req.body.email,
            profile: req.body.profile,
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

module.exports = router;
