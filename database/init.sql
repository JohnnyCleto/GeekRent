CREATE DATABASE IF NOT EXISTS geekrent;

USE geekrent;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    role VARCHAR(20)
);

CREATE TABLE items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    owner_id INT,
    title VARCHAR(255),
    description TEXT,
    category VARCHAR(100),
    rental_price DECIMAL(10,2),
    available BOOLEAN DEFAULT TRUE
);

CREATE TABLE rentals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_id INT,
    client_id INT,
    start_date DATE,
    end_date DATE,
    return_date DATE,
    fine DECIMAL(10,2),
    status VARCHAR(20)
);