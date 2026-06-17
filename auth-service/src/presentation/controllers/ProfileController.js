// src/presentation/controllers/ProfileController.js

const UserRepository = require('../../infrastructure/repositories/UserRepository');

class ProfileController {

  async getProfile(req, res) {
    try {
      const repo = new UserRepository();

      const profile = await repo.getProfile(req.user.id);

      if (!profile) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      return res.json({ profile });

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro no perfil' });
    }
  }
}

module.exports = new ProfileController();