const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/env');

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

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role
      },
      jwtSecret,
      { expiresIn: '7d' }
    );

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    };
  }
}

module.exports = LoginUseCase;