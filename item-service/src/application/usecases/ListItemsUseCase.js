class ListItemsUseCase {

    constructor(repository){
        this.repository =
        repository;
    }

    async execute(){

        return this.repository
        .findAll();

    }

    async findAll(){

    const db =
    await DatabaseConnection
    .getInstance();

    const [rows] =
    await db.execute(
        'SELECT * FROM items'
    );

    return rows;

}

}


module.exports =
ListItemsUseCase;