class RejectRentalUseCase {

    constructor(repository){

        this.repository =
        repository;

    }

    async execute(id){

        await this.repository
        .reject(id);

    }

}

module.exports =
RejectRentalUseCase;