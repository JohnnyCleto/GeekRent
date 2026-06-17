const bcrypt =
require('bcrypt');

class RegisterUserUseCase {

    constructor(userRepository){
        this.userRepository =
        userRepository;
    }

    async execute(data){

        const existingUser =
        await this.userRepository
        .findByEmail(data.email);

        if(existingUser){
            throw new Error(
                'Email já cadastrado'
            );
        }

        const password =
        await bcrypt.hash(
            data.password,
            10
        );

        await this.userRepository
        .create({
            ...data,
            password
        });

    }

}

module.exports =
RegisterUserUseCase;