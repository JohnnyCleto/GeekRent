const DatabaseConnection =
require('./connection');

async function initDatabase() {

    const db =
        await DatabaseConnection.getInstance();

    console.log('Criando tabelas...');

    await db.query(`
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100),
            email VARCHAR(100) UNIQUE,
            password VARCHAR(255),
            role VARCHAR(20)
        )
    `);

    await db.query(`
        CREATE TABLE IF NOT EXISTS items (
            id INT AUTO_INCREMENT PRIMARY KEY,
            owner_id INT,
            title VARCHAR(255),
            description TEXT,
            category VARCHAR(100),
            rental_price DECIMAL(10,2),
            available BOOLEAN DEFAULT TRUE
        )
    `);

    await db.query(`
        CREATE TABLE IF NOT EXISTS rentals (
            id INT AUTO_INCREMENT PRIMARY KEY,
            item_id INT,
            client_id INT,
            start_date DATE,
            end_date DATE,
            return_date DATE,
            fine DECIMAL(10,2),
            status VARCHAR(20)
        )
    `);

    console.log('✅ Tabelas criadas');
}

module.exports = initDatabase;