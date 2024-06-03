
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const uuid = require('uuid');
const {getUserByUsername} = require("../controllers/userController");

// Ruta de inicio de sesión
router.post('/login', async (req, res) => {
  const { username, password, profile} = req.body;

  try {
    const user = await getUserByUsername(username);

    if (!user) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    if (user.profile != profile) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    // Comparar la contraseña proporcionada con la contraseña almacenada utilizando bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    // Generar un UUID para el usuario
    //const userId = uuid.v4();

    // Generar un token JWT válido
    const token = jwt.sign({ userId: user.id }, process.env.SECRET, { expiresIn: '1h' });

    // Devolver el token al cliente
    res.json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
});

module.exports = router;
