'use strict';

require('dotenv').config();
const POSTGRES_URI = 'postgres://localhost:5432/rawanalnujoom';
const { Sequelize, DataTypes } = require('sequelize');

const Collection = require('./lib/collection.js');
const customerSchema = require('./customer.schema.js');
const orderSchema = require('./order.schema.js');

let sequelize = new Sequelize(POSTGRES_URI);

const customerModel = customerSchema(sequelize, DataTypes);
const orderModel = orderSchema(sequelize, DataTypes);

customerModel.hasMany(orderModel, { foreignKey: 'customerId', sourceKey: 'id'});
orderModel.belongsTo(customerModel, { foreignKey: 'customerId', targetKey: 'id'});


//export Collections 
const customerCollection = new Collection(customerModel);
const orderCollection = new Collection(orderModel);


module.exports = {
  db: sequelize,
  customerCollection: customerCollection,
  orderCollection: orderCollection
}