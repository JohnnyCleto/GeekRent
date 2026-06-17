// auth-service/src/presentation/controllers/AuthController.js
const UserRepository =
require('../../infrastructure/repositories/UserRepository');

const RegisterUserUseCase =
require('../../application/usecases/RegisterUserUseCase');

const LoginUseCase =
require('../../application/usecases/LoginUseCase');

const jwt =
require('jsonwebtoken');

const { jwtSecret } =
require('../../config/env');

class AuthController {

    async register(req, res) {

        try {

            const { name, email, password } = req.body;

            const repository = new UserRepository();

            const useCase = new RegisterUserUseCase(repository);

            const user = await useCase.execute(
                name,
                email,
                password
            );

            return res.status(201).json({
                message: 'Usuário criado com sucesso',
                user
            });

        } catch (error) {

            return res.status(400).json({
                error: error.message
            });

        }
    }

    async login(req, res) {

        try {

            const { email, password } = req.body;

            const repository = new UserRepository();

            const useCase = new LoginUseCase(repository);

            const user = await useCase.execute(email, password);

            // 🔥 GARANTIR QUE O TOKEN TEM ID (CORREÇÃO PRINCIPAL)
            const token = jwt.sign(
                {
                    id: user.id,
                    email: user.email,
                    role: user.role
                },
                jwtSecret,
                { expiresIn: '7d' }
               
            );

            return res.json({
                token,
                user
            });

        } catch (error) {

            return res.status(401).json({
                error: error.message
            });

        }
    }

    async getProfile(req, res) {
  try {

    if (!req.user || !req.user.id) {
      return res.status(401).json({
        error: 'Token inválido (id ausente)'
      });
    }

    console.log("USER ID:", req.user.id);

    const repository = new UserRepository();

    const profile = await repository.getProfile(req.user.id);
    const items = await repository.getUserItems(req.user.id);
    const stats = await repository.getStats(req.user.id);

    return res.json({
      profile,
      items,
      stats
    });

  } catch (error) {

    console.error("🔥 PROFILE ERROR:");
    console.error(error);

    return res.status(500).json({
      error: error.message
    });
  }
}

}

module.exports = new AuthController();