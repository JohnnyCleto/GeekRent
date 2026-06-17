// rental-service/src/repositories/RentalRepository.js
const DatabaseConnection =
require('../database/connection');

class RentalRepository {

    async create(rental) {

        const db =
        await DatabaseConnection.getInstance();

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

    async findById(id){

        const db =
        await DatabaseConnection.getInstance();

        const [rows] =
        await db.execute(

            `
            SELECT *
            FROM rentals
            WHERE id=?
            `,

            [id]

        );

        return rows[0];

    }

    async findAll(){

        const db =
        await DatabaseConnection.getInstance();

        const [rows] =
        await db.execute(

            `
            SELECT *
            FROM rentals
            `

        );

        return rows;

    }

    async approve(id){

        const db =
        await DatabaseConnection.getInstance();

        await db.execute(

            `
            UPDATE rentals

            SET status='APPROVED'

            WHERE id=?
            `,

            [id]

        );

    }

    async reject(id){

        const db =
        await DatabaseConnection.getInstance();

        await db.execute(

            `
            UPDATE rentals

            SET status='REJECTED'

            WHERE id=?
            `,

            [id]

        );

    }

    async returnRental(
        id,
        fine
    ){

        const db =
        await DatabaseConnection.getInstance();

        await db.execute(

        `
        UPDATE rentals

        SET

        status='RETURNED',

        fine=?,

        return_date=NOW()

        WHERE id=?

        `,

        [

            fine,

            id

        ]);

    }

}

module.exports =
RentalRepository;