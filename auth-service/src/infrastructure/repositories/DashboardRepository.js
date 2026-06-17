// infrastructure/repositories/DashboardRepository.js

const DatabaseConnection =
require('../database/connection');

class DashboardRepository {

    async getStats(userId){

        const db =
        await DatabaseConnection
        .getInstance();

        const [items] =
        await db.execute(
            `
            SELECT COUNT(*) as total
            FROM items
            WHERE owner_id = ?
            `,
            [userId]
        );

        const [rentals] =
        await db.execute(
            `
            SELECT COUNT(*) as total
            FROM rentals
            WHERE client_id = ?
            `,
            [userId]
        );

        const [revenue] =
        await db.execute(
            `
            SELECT
                COALESCE(SUM(total_price),0)
                as total
            FROM rentals
            WHERE client_id = ?
            `,
            [userId]
        );

        return {

            totalItems:
            items[0].total,

            totalRentals:
            rentals[0].total,

            totalRevenue:
            revenue[0].total

        };
    }

    async getMonthlyRevenue(userId){

    const db =
    await DatabaseConnection
    .getInstance();

    const [rows] =
    await db.execute(

        `
        SELECT

        MONTH(created_at) as month,

        SUM(total_price) as revenue

        FROM rentals

        WHERE client_id = ?

        GROUP BY MONTH(created_at)

        ORDER BY month
        `,

        [userId]

    );

    return rows;
}

async getTopItems(userId){

    const db =
    await DatabaseConnection
    .getInstance();

    const [rows] =
    await db.execute(

        `
        SELECT

        items.title,

        COUNT(rentals.id)
        as rentals

        FROM rentals

        INNER JOIN items

        ON rentals.item_id =
        items.id

        WHERE items.owner_id = ?

        GROUP BY items.id

        ORDER BY rentals DESC

        LIMIT 5
        `,

        [userId]

    );

    return rows;
}

}

module.exports =
DashboardRepository;