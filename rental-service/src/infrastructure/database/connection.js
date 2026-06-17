const mysql = require('mysql2/promise');

class DatabaseConnection {

    static instance;

    static async getInstance() {

        if (!DatabaseConnection.instance) {

            DatabaseConnection.instance =
                mysql.createPool({

                    host: process.env.DB_HOST,

                    user: process.env.DB_USER,

                    password: process.env.DB_PASSWORD,

                    database: process.env.DB_NAME

                });

        }

        return DatabaseConnection.instance;

    }

}

module.exports = DatabaseConnection;