// auth-service/src/presentation/controllers/AuthController.js
const UserRepository = require('../../infrastructure/repositories/UserRepository');
const RegisterUserUseCase = require('../../application/usecases/RegisterUserUseCase');
const LoginUseCase = require('../../application/usecases/LoginUseCase');

const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/env');

class AuthController {

  async register(req, res) {
    try {
      const { name, email, password } = req.body;

      const repo = new UserRepository();
      const useCase = new RegisterUserUseCase(repo);

      const user = await useCase.execute(name, email, password);

      return res.status(201).json({ user });

    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const repo = new UserRepository();
      const useCase = new LoginUseCase(repo);

      const user = await useCase.execute(email, password);

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          role: user.role
        },
        jwtSecret,
        { expiresIn: '7d' }
      );

      return res.json({ token, user });

    } catch (err) {
      return res.status(401).json({ error: err.message });
    }
  }
}

module.exports = new AuthController();