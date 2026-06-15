class CreateItemUseCase {

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
CreateItemUseCase;