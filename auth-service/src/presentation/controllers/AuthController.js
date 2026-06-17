const UserRepository =
require('../../infrastructure/repositories/UserRepository');

const RegisterUserUseCase =
require('../../application/usecases/RegisterUserUseCase');

const LoginUseCase =
require('../../application/usecases/LoginUseCase');

class AuthController {

    async register(req,res){

        try{

            const {
                name,
                email,
                password
            } = req.body;

            const repository =
                new UserRepository();

            const useCase =
                new RegisterUserUseCase(
                    repository
                );

            const user =
                await useCase.execute(
                    name,
                    email,
                    password
                );

            res.status(201)
               .json(user);

        }catch(error){

            res.status(400)
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

            res.json(result);

        }catch(error){

            res.status(401)
               .json({
                    error:error.message
               });
        }
    }

    async getProfile(req,res){

        try{

            const repository =
            new UserRepository();

            const profile =
            await repository.getProfile(
                req.user.id
            );

            const items =
            await repository.getUserItems(
                req.user.id
            );

            const stats =
            await repository.getStats(
                req.user.id
            );

            res.json({

                profile,

                items,

                stats

            });

        }

        catch(error){

            res.status(500).json({

                error:error.message

            });

        }
    }

}

module.exports =
new AuthController();