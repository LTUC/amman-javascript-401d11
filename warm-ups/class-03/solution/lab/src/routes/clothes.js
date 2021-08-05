'use strict';

const express = require('express');

const Clothes = require('../models/clothes.js');
const clothes = new Clothes();

// const app = express();

const router = express.Router();

// RESTful Route Declarations
router.get('/clothes', getClothes);
router.get('/clothes/:id', getOneClothes);
router.post('/clothes', createClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);

// RESTful Route Handlers
function getClothes(req, res) {
  let allClothes = clothes.get();
  res.status(200).json(allClothes);
}

function getOneClothes(req, res) {
  const id = parseInt(req.params.id);
  let theClothes = clothes.get(id)
  res.status(200).json(theClothes);
}

function createClothes(req, res) {
  let obj = req.body;
  let newClothes = clothes.create(obj);
  res.status(200).json(newClothes);
}

function updateClothes(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  let updatedClothes = clothes.update(id, obj)
  res.status(200).json(updatedClothes);
}

function deleteClothes(req, res) {
  let id = parseInt(req.params.id);
  let deletedClothes = clothes.delete(id);
  res.status(200).json(deletedClothes);
}


module.exports = router;
