
const jwt = require('jsonwebtoken');

// Middleware de autenticación
function authenticateToken(req, res, next) {
  // Obtener el token del encabezado de autorización
  const token = req.header('Authorization').split(' ')[1];

  // Verificar si el token existe
  if (!token) {
    return res.status(401).json({ message: 'No se proporcionó un token' });
  }

  // Verificar y decodificar el token
  jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
    if (err) {
      console.error(err);
      return res.status(403).json({ message: 'Token inválido' });
    }

    // Si el token es válido, almacenar la información decodificada del usuario en el objeto de solicitud para uso posterior
    req.user = decodedToken;

    // Continuar con la siguiente función de middleware o la ruta protegida
    next();
  });
}

module.exports = {
  authenticateToken
};
