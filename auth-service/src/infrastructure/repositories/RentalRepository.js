const DatabaseConnection =
require('../database/connection');

class RentalRepository {

    async create(rental){

        const db =
        await DatabaseConnection
        .getInstance();

        await db.execute(
        `
        INSERT INTO rentals
        (
            item_id,
            client_id,
            start_date,
            end_date,
            status
        )
        VALUES
        (
            ?,?,?,?,
            'PENDING'
        )
        `,
        [
            rental.itemId,
            rental.clientId,
            rental.startDate,
            rental.endDate
        ]);
    }

}

module.exports =
RentalRepository;