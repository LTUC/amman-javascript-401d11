'use strict';

// connects to our database depending on the URI set as an environment variable, 
const POSTGRES_URI =  process.env.DATABASE_URI || "postgres://localhost:5432/rawanalnujoom";
const { Sequelize, DataTypes } = require('sequelize');

// We can add Configuration based on the environment ... Where is our code running in "development" and "test" vs "deployed"?
let sequelizeOptions = {};
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

// our schema definitions
const people = require('./people.model.js');

module.exports = {
  db: sequelize,
  People: people(sequelize, DataTypes),
};