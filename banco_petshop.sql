create database pet;
use pet;

CREATE TABLE users(
	id int auto_increment primary key,
    name varchar(255) not null,
   	email varchar(255) not null unique,
	password varchar(255) not null
);

create table images(
	id int auto_increment primary key,
    filename varchar(255) not null,
    filepath varchar(255) not null,
    uploaded_at timestamp default current_timestamp
);