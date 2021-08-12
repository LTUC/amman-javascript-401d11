'use strict';
require('dotenv').config();

const server = require('./server.js');
const {db} = require('./models/index'); //destructuring es6
// first connect to my Database then start my server

db.sync().then(()=> {
    server.start(process.env.PORT|| 3000);
})
.catch(console.error);
