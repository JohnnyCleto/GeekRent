const DatabaseConnection =
require('./connection');

async function initDatabase() {

    const db =
        await DatabaseConnection.getInstance();

    await db.query(`
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100),
            email VARCHAR(100) UNIQUE,
            password VARCHAR(255),
            role VARCHAR(20)
        )
    `);

    console.log("Tabela users OK");
}

module.exports = initDatabase;