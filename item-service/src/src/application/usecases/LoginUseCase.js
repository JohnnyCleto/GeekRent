const bcrypt =
require('bcrypt');

const jwt =
require('jsonwebtoken');

const {
    jwtSecret,
    jwtExpiresIn
} = require('../../config/env');

class LoginUseCase {

    constructor(userRepository) {
        this.userRepository =
        userRepository;
    }

    async execute(email,password){

        const user =
        await this.userRepository
        .findByEmail(email);

        if(!user){
            throw new Error(
                'Usuário não encontrado'
            );
        }

        const validPassword =
        await bcrypt.compare(
            password,
            user.password
        );

        if(!validPassword){
            throw new Error(
                'Senha inválida'
            );
        }

        const token =
        jwt.sign(
            {
                id:user.id,
                role:user.role
            },
            jwtSecret,
            {
                expiresIn:jwtExpiresIn
            }
        );

        return {
            token,
            user
        };
    }

}

module.exports =
LoginUseCase;