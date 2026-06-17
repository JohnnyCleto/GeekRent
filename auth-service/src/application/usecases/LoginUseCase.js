const bcrypt = require('bcryptjs');

class LoginUseCase {

  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(email, password) {

    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      throw new Error('Senha inválida');
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    };
  }
}

module.exports = LoginUseCase;