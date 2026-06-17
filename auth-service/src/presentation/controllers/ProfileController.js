// src/presentation/controllers/ProfileController.js

const UserRepository =
require('../../infrastructure/repositories/UserRepository');

class ProfileController {

async getProfile(req, res) {
  try {
    if (!req.user?.id) {
      return res.status(401).json({
        error: "Token sem ID"
      });
    }

    const repository = new UserRepository();

    const profile = await repository.getProfile(req.user.id);

    if (!profile) {
      return res.status(404).json({
        error: "Usuário não encontrado"
      });
    }

    const items = await repository.getUserItems(req.user.id);
    const stats = await repository.getStats(req.user.id);

    return res.json({ profile, items, stats });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Erro interno no perfil"
    });
  }
}

}

module.exports =
new ProfileController();