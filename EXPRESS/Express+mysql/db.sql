-- Create the database
CREATE DATABASE express;

-- Use the created database
USE express;

-- Create the 'items' table
CREATE TABLE items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
