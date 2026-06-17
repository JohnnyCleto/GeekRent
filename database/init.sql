CREATE DATABASE IF NOT EXISTS geekrent;

USE geekrent;

-- =====================================================
-- USUÁRIOS
-- =====================================================

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(100) UNIQUE NOT NULL,

    password VARCHAR(255) NOT NULL,

    role VARCHAR(20) DEFAULT 'client',

    avatar_url VARCHAR(500),

    city VARCHAR(100),

    state VARCHAR(100),

    bio TEXT,

    rating DECIMAL(3,2) DEFAULT 0,

    total_rentals INT DEFAULT 0,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- ITENS
-- =====================================================

CREATE TABLE items (
    id INT AUTO_INCREMENT PRIMARY KEY,

    owner_id INT NOT NULL,

    title VARCHAR(255) NOT NULL,

    description TEXT,

    category VARCHAR(100),

    rental_price DECIMAL(10,2) NOT NULL,

    image_url VARCHAR(500),

    city VARCHAR(100),

    state VARCHAR(100),

    available BOOLEAN DEFAULT TRUE,

    views INT DEFAULT 0,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (owner_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);

-- =====================================================
-- LOCAÇÕES
-- =====================================================

CREATE TABLE rentals (
    id INT AUTO_INCREMENT PRIMARY KEY,

    item_id INT NOT NULL,

    client_id INT NOT NULL,

    start_date DATE NOT NULL,

    end_date DATE NOT NULL,

    return_date DATE,

    fine DECIMAL(10,2) DEFAULT 0,

    total_price DECIMAL(10,2),

    status VARCHAR(20) DEFAULT 'pending',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (item_id)
        REFERENCES items(id)
        ON DELETE CASCADE,

    FOREIGN KEY (client_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);

-- =====================================================
-- FAVORITOS
-- =====================================================

CREATE TABLE favorites (
    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL,

    item_id INT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    FOREIGN KEY (item_id)
        REFERENCES items(id)
        ON DELETE CASCADE
);

-- =====================================================
-- AVALIAÇÕES
-- =====================================================

CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,

    rental_id INT NOT NULL,

    reviewer_id INT NOT NULL,

    reviewed_user_id INT NOT NULL,

    rating INT NOT NULL,

    comment TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (rental_id)
        REFERENCES rentals(id)
        ON DELETE CASCADE,

    FOREIGN KEY (reviewer_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    FOREIGN KEY (reviewed_user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);

-- =====================================================
-- NOTIFICAÇÕES
-- =====================================================

CREATE TABLE notifications (
    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL,

    title VARCHAR(255),

    message TEXT,

    is_read BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);