const RentalRepository =
require('../../infrastructure/repositories/RentalRepository');

const CreateRentalUseCase =
require('../../application/usecases/CreateRentalUseCase');

const ApproveRentalUseCase =
require('../../application/usecases/ApproveRentalUseCase');

const RejectRentalUseCase =
require('../../application/usecases/RejectRentalUseCase');

class RentalController {

    async create(req,res){

        const repository =
        new RentalRepository();

        const useCase =
        new CreateRentalUseCase(
            repository
        );

        await useCase.execute(
            req.body
        );

        return res.status(201)
        .json({
            message:
            'Locação criada'
        });

    }

    async approve(req,res){

        const repository =
        new RentalRepository();

        const useCase =
        new ApproveRentalUseCase(
            repository
        );

        await useCase.execute(
            req.params.id
        );

        return res.json({
            message:
            'Locação aprovada'
        });

    }

    async reject(req,res){

        const repository =
        new RentalRepository();

        const useCase =
        new RejectRentalUseCase(
            repository
        );

        await useCase.execute(
            req.params.id
        );

        return res.json({
            message:
            'Locação rejeitada'
        });

    }

}

module.exports =
new RentalController();