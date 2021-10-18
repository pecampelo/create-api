CREATE DATABASE myusers;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories (
	id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
	name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
	id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
	name VARCHAR NOT NULL,
	email VARCHAR UNIQUE,
	phone VARCHAR,
	address VARCHAR,
	addressNumber VARCHAR,
	city VARCHAR,
	state VARCHAR,
	country VARCHAR,
	CEP VARCHAR,
	CPF VARCHAR,
	age INT,
	jobposition VARCHAR,
	company VARCHAR,
	category_id UUID,
	FOREIGN KEY(category_id) REFERENCES categories(id)
);

