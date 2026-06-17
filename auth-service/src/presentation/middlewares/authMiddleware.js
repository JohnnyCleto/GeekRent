// auth-service/src/presentation/middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/env');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token não informado' });
  }

  const token = authHeader.replace('Bearer ', '');

  try {
    const decoded = jwt.verify(token, jwtSecret);

    if (!decoded?.id) {
      return res.status(401).json({ error: 'Token inválido' });
    }

    req.user = decoded;
    next();

  } catch (err) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};