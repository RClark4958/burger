DROP DATABASE IF EXISTS eefb7d3abjstwrf5;
CREATE DATABASE eefb7d3abjstwrf5;

USE eefb7d3abjstwrf5;

CREATE TABLE burgers(
    id INT(4) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(60) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);