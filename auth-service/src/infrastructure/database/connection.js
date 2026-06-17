const mysql = require('mysql2/promise');
const { db } = require('../../config/env');

class DatabaseConnection {

    static instance;

    static async getInstance() {

        if (!DatabaseConnection.instance) {

            DatabaseConnection.instance =
                mysql.createPool({
                    host: db.host,
                    port: db.port,
                    user: db.user,
                    password: db.password,
                    database: db.database,

                    waitForConnections: true,
                    connectionLimit: 10,
                    queueLimit: 0
                });

            console.log("✅ MySQL conectado");
        }

        return DatabaseConnection.instance;
    }
}

module.exports = DatabaseConnection;