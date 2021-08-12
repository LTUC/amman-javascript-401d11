'use strict';

const express = require('express');

const router = express.Router();

const {orderCollection} = require('../models/index');
// console.log(People)
// add routes
router.get('/order', getOrder);
router.post('/order', createOrder);

async function getOrder(req, res) {
    // get me all data from people
    let order = await orderCollection.read();
    res.status(200).json(order);
}

async function createOrder(req, res) {
    let newOrder = req.body;
    let order = await orderCollection.create(newOrder);
    res.status(200).json(order);
}



module.exports = router;