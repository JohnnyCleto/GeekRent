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
console.log("DB_HOST =", process.env.DB_HOST);
console.log("DB_PORT =", process.env.DB_PORT);
console.log("DB_NAME =", process.env.DB_NAME);
console.log("DB_USER =", process.env.DB_USER);

module.exports = DatabaseConnection;