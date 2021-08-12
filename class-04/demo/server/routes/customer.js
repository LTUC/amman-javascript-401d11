'use strict';

const express = require('express');

const router = express.Router();

const {customerCollection} = require('../models/index');
// console.log(People)
// add routes
router.get('/customer', getCustomer);
router.post('/customer', createCustomer);


async function getCustomer(req, res) {
    // get me all data from people
    let customer = await customerCollection.read();
    res.status(200).json(customer);
}

async function createCustomer(req, res) {
    let newCustomer = req.body;
    let customer = await customerCollection.create(newCustomer);
    res.status(200).json(customer);
}



module.exports = router;