CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
	id INTEGER NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(50) NOT NULL,
	devoured BOOLEAN,
	date TIMESTAMP,
	PRIMARY KEY(id)
);