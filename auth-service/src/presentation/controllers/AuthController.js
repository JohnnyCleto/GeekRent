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

    if (!req.user?.id) {
      return res.status(401).json({
        error: 'Usuário não autenticado'
      });
    }

    const repository = new UserRepository();

    const [profile, items, stats] = await Promise.all([
      repository.getProfile(req.user.id),
      repository.getUserItems(req.user.id),
      repository.getStats(req.user.id)
    ]);

    if (!profile) {
      return res.status(404).json({
        error: 'Usuário não encontrado'
      });
    }

    return res.json({
      profile,
      items,
      stats
    });

  } catch (error) {

    console.error("PROFILE ERROR:", error);

    return res.status(500).json({
      error: 'Erro interno no perfil',
      details: error.message
    });
  }
}

}

module.exports = new AuthController();