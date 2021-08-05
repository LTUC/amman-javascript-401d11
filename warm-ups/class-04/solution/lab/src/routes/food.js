'use strict';

const express = require('express');

const foodModel = require('../models/food/model.js');
const Collection = require('../models/data-collection.js');
const food = new Collection(foodModel);

// const app = express();

const router = express.Router();

// RESTful Route Declarations
router.get('/food', getFood);
router.get('/food/:id', getOneFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

// RESTful Route Handlers
async function getFood(req, res) {
  let allFood = await food.get();
  res.status(200).json(allFood);
}

async function getOneFood(req, res) {
  const id = req.params.id;
  let theFood = await food.get(id)
  res.status(200).json(theFood);
}

async function createFood(req, res) {
  let obj = req.body;
  let newFood = await food.create(obj);
  res.status(200).json(newFood);
}

async function updateFood(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedFood = await food.update(id, obj)
  res.status(200).json(updatedFood);
}

async function deleteFood(req, res) {
  let id = req.params.id;
  let deletedFood = await food.delete(id);
  res.status(200).json(deletedFood);
}


module.exports = router;
