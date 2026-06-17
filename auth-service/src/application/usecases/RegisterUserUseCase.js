const bcrypt =
require('bcryptjs');

class RegisterUserUseCase {

    constructor(userRepository) {

        this.userRepository =
            userRepository;
    }

    async execute(
        name,
        email,
        password
    ) {

        const existingUser =
            await this.userRepository
                .findByEmail(email);

        if (existingUser) {

            throw new Error(
                'Usuário já existe'
            );
        }

        const hashedPassword =
            await bcrypt.hash(password,10);

        return await this.userRepository
            .create({
                name,
                email,
                password: hashedPassword,
                role: 'client'
            });
    }
}

module.exports =
RegisterUserUseCase;