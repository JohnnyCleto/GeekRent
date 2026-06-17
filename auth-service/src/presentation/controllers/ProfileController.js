// src/presentation/controllers/ProfileController.js

const UserRepository =
require('../../infrastructure/repositories/UserRepository');

class ProfileController {

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

        }catch(error){

            res.status(500).json({

                error:error.message

            });

        }

    }

}

module.exports =
new ProfileController();