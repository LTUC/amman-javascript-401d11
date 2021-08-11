'use strict';

const express = require('express');

const router = express.Router();
const {People} = require('../models/index');
// console.log(People)
// add routes
router.get('/people', getPeople);
router.get('/people/:id', getOnePerson);

router.post('/people', createPerson);
router.put('/people/:id', updatePerson);
router.delete('/people/:id', deletePerson);


async function getPeople(req, res) {
    // get me all data from people
    let people = await People.findAll();
    res.status(200).json(people);
}

async function getOnePerson(req, res) {
    const id = parseInt(req.params.id); // req.params is an object 
    let person = await People.findOne({ where: {id: id} });
    res.status(200).json(person);
}

async function createPerson(req, res) {
    let newPerson = req.body;
    let person = await People.create(newPerson);
    res.status(200).json(person);
}

async function updatePerson(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;
    // find the person
    let found = await People.findOne({ where: {id: id} });
    // update the person + save
    let updatedPerson = await found.update(obj);
    res.status(200).json(updatedPerson);
}

async function deletePerson(req,res) {
    let id = parseInt(req.params.id);
    let deletedPerson = await People.destroy({where: {id: id}});
    res.status(204).json(deletedPerson);
}



module.exports = router;