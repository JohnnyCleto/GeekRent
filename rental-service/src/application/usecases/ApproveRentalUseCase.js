class ApproveRentalUseCase {

    constructor(repository){

        this.repository =
        repository;

    }

    async execute(id){

        await this.repository
        .approve(id);

    }

}

module.exports =
ApproveRentalUseCase;