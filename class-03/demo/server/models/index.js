'use strict';

const POSTGRES_URI = "postgres://localhost:5432/testing";
const { Sequelize, DataTypes } = require('sequelize');
const people = require('./people.model');

let sequelize = new Sequelize(POSTGRES_URI, {});

// lets define our Schema
module.exports = {
    People: people(sequelize, DataTypes),
    db: sequelize
}