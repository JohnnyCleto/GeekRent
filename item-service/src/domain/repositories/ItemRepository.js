const DatabaseConnection =
require('../database/connection');

class ItemRepository {

    async create(item){

        const db =
        await DatabaseConnection
        .getInstance();

        await db.execute(
            `
            INSERT INTO items
            (
                owner_id,
                title,
                description,
                category,
                rental_price,
                available
            )
            VALUES
            (
                ?,?,?,?,?,?
            )
            `,
            [
                item.ownerId,
                item.title,
                item.description,
                item.category,
                item.rentalPrice,
                item.available
            ]
        );
    }

}

module.exports =
ItemRepository;