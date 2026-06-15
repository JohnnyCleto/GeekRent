const ItemRepository =
require('../../infrastructure/repositories/ItemRepository');

const CreateItemUseCase =
require('../../application/usecases/CreateItemUseCase');

class ItemController {

    async create(req,res){

        const repository =
        new ItemRepository();

        const useCase =
        new CreateItemUseCase(
            repository
        );

        await useCase.execute(
            req.body
        );

        return res.status(201)
        .json({
            message:
            'Item criado'
        });

    }

}

module.exports =
new ItemController();