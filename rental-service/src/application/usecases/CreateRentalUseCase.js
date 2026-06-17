// rental-service/src/application/usecases/CreateRentalUseCase.js
class CreateRentalUseCase {

    constructor(repository){

        this.repository =
        repository;

    }

    async execute(data){

        await this.repository
        .create(data);

    }

}

module.exports =
CreateRentalUseCase;