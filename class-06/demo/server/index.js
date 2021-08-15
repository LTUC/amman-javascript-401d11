'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');

const {Sequelize, DataTypes} = require('sequelize');

const POSTGRES_URI = 'postgres://localhost:5432/rawanalnujoom';

// config for prod
const sequelize = new Sequelize(POSTGRES_URI, {});
const app = express();

app.use(express.json());

// app.use(express.urlencoded({extended: true}));

const Users = sequelize.define('new_users', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true // CONSTRAINT
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


app.post('/signup', async(req, res, next) => {
    console.log("inside signup !!! ");
    console.log({body: req.body})
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        console.log("req.body.password :", req.body.password)
        const record = await Users.create({
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


app.post('/signin', async (req, res, next)=> {
    // from the authorization header we need the username and password
    // to verify the login
    // Authorization header ----> Basic encoded(username:password)
    if (req.headers['authorization']) {
        let basicHeaderParts = req.headers.authorization.split(' '); // ['Basic', encoded(username:password)]
        let encoded = basicHeaderParts.pop();
        let decoded = base64.decode(encoded); // username:password
        let [username, password] = decoded.split(":"); // rawan test@1234
        // finally we have both username and password !! 
        // find in DB
        // =3wSd#wwwqqQAdd123sWe 
        // One way encryption (hashing) cant convert it back
        // what to do then? I will hash the plain text and compare with DB
       try {
           const user = await Users.findOne({ where: {username: username} });
           const valid = await bcrypt.compare(password, user.password);
            if (valid) {
                // delete user.dataValues['password']; & return user
                res.status(200).json({username: username, id: user.id})
            } else {
                // res.status(500).send('Invalid UserName and Password')
                // throw new Error('Invalid UserName and Password');
                next('Invalid UserName and Password')
            }
       } catch(e) {
        next('error in signin')
        // res.status(500).send('error in signin')
       }
    }
});



sequelize.sync().then(()=>{
    app.listen(4000, ()=> console.log('running on 4000'))
}).catch( (e)=> {
    console.error(e)
});

