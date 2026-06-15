const UserRepository =
require('../../infrastructure/repositories/UserRepository');

const RegisterUserUseCase =
require('../../application/usecases/RegisterUserUseCase');

const LoginUseCase =
require('../../application/usecases/LoginUseCase');

class AuthController {

    async register(req,res){

        try{

            const repository =
            new UserRepository();

            const useCase =
            new RegisterUserUseCase(
                repository
            );

            await useCase.execute(
                req.body
            );

            return res.status(201)
            .json({
                message:'Usuário criado'
            });

        }catch(error){

            return res.status(400)
            .json({
                error:error.message
            });

        }
    }

    async login(req,res){

        try{

            const {
                email,
                password
            } = req.body;

            const repository =
            new UserRepository();

            const useCase =
            new LoginUseCase(
                repository
            );

            const result =
            await useCase.execute(
                email,
                password
            );

            return res.json(result);

        }catch(error){

            return res.status(401)
            .json({
                error:error.message
            });

        }

    }

}

module.exports =
new AuthController();