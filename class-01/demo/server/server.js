'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');

function start(port) {
    app.listen(port, ()=> console.log(`Running on Port ${port}`))
}

app.get('/', (req, res)=> {
    res.send('this is home page!!! :D :D :D')
});

app.post('/bad', (req,res)=> {
    let number = 12;
    number.forEach(x=> console.log(x));
    res.send('this Bad Route ');
})

app.get('/data', (req, res)=> {
    res.json({
       id: 1, 
       name: "Test Student",
       email: "test@test.com"
    });
});

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}