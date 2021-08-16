'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const basicAuth = require('./middleware/basicAuth');
const bearerAuth = require('./middleware/bearerAuth');
const Users = require('./models/userSchema');


const {Sequelize, DataTypes} = require('sequelize');

const POSTGRES_URI = 'postgres://localhost:5432/rawanalnujoom';

// config for prod
const sequelize = new Sequelize(POSTGRES_URI, {});
const UserSchema = Users(sequelize, DataTypes);

const app = express();

app.use(express.json());


app.post('/signup', async(req, res, next) => {
    console.log("inside signup !!! ");
    console.log({body: req.body})
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        console.log("req.body.password :", req.body.password)
        const record = await UserSchema.create({
            username : req.body.username,
            password: req.body.password
        });
        console.log("record >>>>> ", record)
        res.json(record);
    } catch (e) {
        console.log(e);
        next('invalid')
        // res.status(500).json({err: 'invalid'})
    }
});


app.post('/signin', basicAuth(UserSchema), (req, res, next)=> {
    res.status(200).json(req.user);
});

// apply the middleware only on protected routes for logged-in users 
app.get('/user', bearerAuth(UserSchema), (req, res) => {
    res.json(req.user);
})


// DONT apply the middleware on open routes for both loggedout & logged-in users 
app.get('/test', (req, res) => {
    res.json({msg: 'hello'});
});


sequelize.sync().then(()=>{
    app.listen(4000, ()=> console.log('running on 4000'))
}).catch( (e)=> {
    console.error(e)
});

