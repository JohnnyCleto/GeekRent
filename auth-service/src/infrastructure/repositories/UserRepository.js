// auth-service/src/infrastructure/repositories/UserRepository.js

const DatabaseConnection =
require('../database/connection');

class UserRepository {

    async create(user) {

        const db = await DatabaseConnection.getInstance();

        const [result] = await db.execute(
            `
            INSERT INTO users
            (name, email, password, role)
            VALUES (?, ?, ?, ?)
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

        const db = await DatabaseConnection.getInstance();

        const [rows] = await db.execute(
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

        const db = await DatabaseConnection.getInstance();

        const [rows] = await db.execute(
            `
            SELECT *
            FROM users
            WHERE id = ?
            `,
            [id]
        );

        return rows[0];
    }

    /**
     * 🔥 SOMENTE DADOS DO USUÁRIO (SEM MICROSERVICES EXTERNOS)
     */
    async getProfile(userId) {

        if (!userId) {
            throw new Error("userId inválido");
        }

        const db = await DatabaseConnection.getInstance();

        const [rows] = await db.execute(
            `
            SELECT
                id,
                name,
                email,
                role,
                avatar_url,
                city,
                state,
                bio,
                rating
            FROM users
            WHERE id = ?
            `,
            [userId]
        );

        return rows[0] || null;
    }

    /**
     * ❌ REMOVIDO: getUserItems (PERTENCE AO item-service)
     * ❌ REMOVIDO: getStats (PERTENCE A OUTRO MICROSERVICE OU AGREGADOR)
     */

}

module.exports = UserRepository;