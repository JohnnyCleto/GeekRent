const DatabaseConnection =
require('../database/connection');

class ItemRepository {

    async create(item) {

        const db =
        await DatabaseConnection
        .getInstance();

        const [result] =
        await db.execute(

            `
            INSERT INTO items
            (
                owner_id,
                title,
                description,
                category,
                rental_price,
                image_url,
                city,
                state,
                available
            )
            VALUES
            (?,?,?,?,?,?,?,?,?)
            `,

            [
                item.ownerId,
                item.title,
                item.description,
                item.category,
                item.rentalPrice,
                item.imageUrl,
                item.city,
                item.state,
                item.available ?? true
            ]
        );

        return {
            id: result.insertId,
            ...item
        };
    }

async findAll() {

    const db =
    await DatabaseConnection
    .getInstance();

    const [rows] =
    await db.execute(`
        SELECT
            items.*,
            users.name AS owner_name
        FROM items
        INNER JOIN users
        ON items.owner_id = users.id
        ORDER BY items.created_at DESC
    `);

    return rows;
}

async findById(id){

    const db =
    await DatabaseConnection
    .getInstance();

    const [rows] =
    await db.execute(`
        SELECT
            items.*,
            users.name AS owner_name
        FROM items
        INNER JOIN users
        ON items.owner_id = users.id
        WHERE items.id = ?
    `,[id]);

    return rows[0];
}

    async findById(id) {

        const db =
        await DatabaseConnection
        .getInstance();

        const [rows] =
        await db.execute(

            `
            SELECT *
            FROM items
            WHERE id = ?
            `,

            [id]
        );

        return rows[0];
    }

    async update(id, data) {

        const db =
        await DatabaseConnection
        .getInstance();

        await db.execute(

            `
            UPDATE items
            SET
                title = ?,
                description = ?,
                category = ?,
                rental_price = ?,
                image_url = ?,
                city = ?,
                state = ?,
                available = ?
            WHERE id = ?
            `,

            [
                data.title,
                data.description,
                data.category,
                data.rentalPrice,
                data.imageUrl,
                data.city,
                data.state,
                data.available,
                id
            ]
        );

        return this.findById(id);
    }

    async incrementViews(id) {

        const db =
        await DatabaseConnection
        .getInstance();

        await db.execute(

            `
            UPDATE items
            SET views = views + 1
            WHERE id = ?
            `,

            [id]
        );
    }

    async delete(id) {

        const db =
        await DatabaseConnection
        .getInstance();

        await db.execute(

            `
            DELETE FROM items
            WHERE id = ?
            `,

            [id]
        );
    }

    async findByCategory(category) {

        const db =
        await DatabaseConnection
        .getInstance();

        const [rows] =
        await db.execute(

            `
            SELECT *
            FROM items
            WHERE category = ?
            `,

            [category]
        );

        return rows;
    }

    async findByLocation(city, state) {

        const db =
        await DatabaseConnection
        .getInstance();

        const [rows] =
        await db.execute(

            `
            SELECT *
            FROM items
            WHERE city = ?
            AND state = ?
            `,

            [city, state]
        );

        return rows;
    }
}

module.exports =
ItemRepository;