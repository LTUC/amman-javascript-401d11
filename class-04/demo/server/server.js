'use strict';
// 1st level packages -> we did not install anything
// 3rd party packages
const express = require('express');
// local modules
const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');
const logger = require('./middlewares/logger');
const customerRoutes = require('./routes/customer');
const orderRoutes = require('./routes/order');

const app = express();
// Global Middlewares
app.use(express.json()); // access the body
// app.use(cors()); install the package
app.use(logger);
// Use our routes form the routing module -> customer, order
app.use(customerRoutes);
app.use(orderRoutes);

function start(port) {
    app.listen(port, ()=> console.log(`Running on Port ${port}`))
}

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}