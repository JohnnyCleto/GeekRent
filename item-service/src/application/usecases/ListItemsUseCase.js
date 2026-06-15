class ListItemsUseCase {

    constructor(repository){
        this.repository =
        repository;
    }

    async execute(){

        return this.repository
        .findAll();

    }

}

module.exports =
ListItemsUseCase;