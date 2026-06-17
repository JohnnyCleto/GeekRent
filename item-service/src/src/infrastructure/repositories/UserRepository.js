const DatabaseConnection =
require('../database/connection');

class UserRepository {

    async create(user) {

        const db =
        await DatabaseConnection.getInstance();

        const query = `
            INSERT INTO users
            (name,email,password,role)
            VALUES (?,?,?,?)
        `;

        await db.execute(query, [
            user.name,
            user.email,
            user.password,
            user.role
        ]);
    }

    async findByEmail(email) {

        const db =
        await DatabaseConnection.getInstance();

        const [rows] =
        await db.execute(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );

        return rows[0];
    }

}

module.exports =
UserRepository;