const mysql = require('mysql2/promise');
const { db } = require('../../config/env');

class DatabaseConnection {

    static instance;

    static async getInstance() {

        if (!DatabaseConnection.instance) {

            console.log('DB_HOST:', db.host);
            console.log('DB_PORT:', db.port);
            console.log('DB_NAME:', db.database);
            console.log('DB_USER:', db.user);

            DatabaseConnection.instance =
                mysql.createPool({
                    host: db.host,
                    port: Number(db.port),
                    user: db.user,
                    password: db.password,
                    database: db.database,

                    waitForConnections: true,
                    connectionLimit: 10,
                    queueLimit: 0
                });

            const connection =
                await DatabaseConnection.instance.getConnection();

            console.log('✅ Conectado ao MySQL Railway');

            connection.release();
        }

        return DatabaseConnection.instance;
    }
}

module.exports = DatabaseConnection;