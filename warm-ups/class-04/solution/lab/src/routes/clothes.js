'use strict';

const express = require('express');

const clothesModel = require('../models/clothes/model.js');
const Collection = require('../models/data-collection.js');
const clothes = new Collection(clothesModel);

const router = express.Router();

// RESTful Route Declarations
router.get('/clothes', getClothes);
router.get('/clothes/:id', getOneClothes);
router.post('/clothes', createClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);

// RESTful Route Handlers
async function getClothes(req, res) {
  let allClothes = await clothes.get();
  res.status(200).json(allClothes);
}

async function getOneClothes(req, res) {
  let id = req.params.id;
  let theClothes = await clothes.get(id)
  res.status(200).json(theClothes);
}

async function createClothes(req, res) {
  let obj = req.body;
  let newClothes = await clothes.create(obj);
  res.status(200).json(newClothes);
}

async function updateClothes(req, res) {
  let id = req.params.id;
  const obj = req.body;
  let updatedClothes = await clothes.update(id, obj)
  res.status(200).json(updatedClothes);
}

async function deleteClothes(req, res) {
  let id = req.params.id;
  let deletedClothes = await clothes.delete(id);
  res.status(200).json(deletedClothes);
}


module.exports = router;
