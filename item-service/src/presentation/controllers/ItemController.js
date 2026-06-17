const ItemRepository =
require('../../infrastructure/repositories/ItemRepository');

const CreateItemUseCase =
require('../../application/usecases/CreateItemUseCase');

const ListItemsUseCase =
require('../../application/usecases/ListItemsUseCase');

const FindItemUseCase =
require('../../application/usecases/FindItemUseCase');

const UpdateItemUseCase =
require('../../application/usecases/UpdateItemUseCase');

const DeleteItemUseCase =
require('../../application/usecases/DeleteItemUseCase');

class ItemController {

    async getAll(req,res){

    try{

        const repository =
        new ItemRepository();

        const items =
        await repository.findAll();

        res.json(items);

    }catch(error){

        res.status(500).json({
            error:error.message
        });

    }
}

    async create(req, res) {

        try {

            const repository =
            new ItemRepository();

            const useCase =
            new CreateItemUseCase(
                repository
            );

            const item =
            await useCase.execute(
                req.body
            );

            return res.status(201)
            .json(item);

        } catch(error) {

            return res.status(400)
            .json({
                error: error.message
            });

        }
    }

    async list(req, res) {

        try {

            const repository =
            new ItemRepository();

            const useCase =
            new ListItemsUseCase(
                repository
            );

            const items =
            await useCase.execute();

            return res.json(items);

        } catch(error) {

            return res.status(500)
            .json({
                error: error.message
            });

        }
    }

    async findById(req, res) {

        try {

            const repository =
            new ItemRepository();

            await repository.incrementViews(
                req.params.id
            );

            const useCase =
            new FindItemUseCase(
                repository
            );

            const item =
            await useCase.execute(
                req.params.id
            );

            if(!item){

                return res.status(404)
                .json({
                    error:'Item não encontrado'
                });

            }

            return res.json(item);

        } catch(error) {

            return res.status(500)
            .json({
                error:error.message
            });

        }
    }

    async update(req,res){

        try{

            const repository =
            new ItemRepository();

            const useCase =
            new UpdateItemUseCase(
                repository
            );

            const item =
            await useCase.execute(
                req.params.id,
                req.body
            );

            return res.json(item);

        } catch(error){

            return res.status(400)
            .json({
                error:error.message
            });

        }
    }

    async delete(req,res){

        try{

            const repository =
            new ItemRepository();

            const useCase =
            new DeleteItemUseCase(
                repository
            );

            await useCase.execute(
                req.params.id
            );

            return res.json({

                success:true,

                message:
                'Item removido com sucesso'

            });

        } catch(error){

            return res.status(400)
            .json({
                error:error.message
            });

        }
    }

    async findByCategory(req,res){

        try{

            const repository =
            new ItemRepository();

            const items =
            await repository
            .findByCategory(
                req.params.category
            );

            return res.json(items);

        } catch(error){

            return res.status(500)
            .json({
                error:error.message
            });

        }
    }

    async findByLocation(req,res){

        try{

            const repository =
            new ItemRepository();

            const items =
            await repository
            .findByLocation(

                req.query.city,

                req.query.state

            );

            return res.json(items);

        } catch(error){

            return res.status(500)
            .json({
                error:error.message
            });

        }
    }
}

module.exports =
new ItemController();