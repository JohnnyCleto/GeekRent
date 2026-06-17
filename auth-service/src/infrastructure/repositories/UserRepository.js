const DatabaseConnection =
require('../database/connection');

class UserRepository {

    async create(user) {

        const db =
            await DatabaseConnection.getInstance();

        const [result] =
            await db.execute(
                `
                INSERT INTO users
                (name,email,password,role)
                VALUES (?,?,?,?)
                `,
                [
                    user.name,
                    user.email,
                    user.password,
                    user.role
                ]
            );

        user.id = result.insertId;

        return user;
    }

    async findByEmail(email) {

        const db =
            await DatabaseConnection.getInstance();

        const [rows] =
            await db.execute(
                `
                SELECT *
                FROM users
                WHERE email = ?
                `,
                [email]
            );

        return rows[0];
    }

    async findById(id) {

        const db =
            await DatabaseConnection.getInstance();

        const [rows] =
            await db.execute(
                `
                SELECT *
                FROM users
                WHERE id = ?
                `,
                [id]
            );

        return rows[0];
    }
}

module.exports = UserRepository;