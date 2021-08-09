'use strict';

// 1st level packages -> we did not install anything
// 3rd party packages
const express = require('express');
// local modules
const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');
const logger = require('./middlewares/logger');
const getAgent = require('./middlewares/getAgent');
const square = require('./middlewares/square')

const app = express();

// Global Middlewares
app.use(express.json()); // access the body
// app.use(cors()); install the package
app.use(logger);

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

app.get('/test', getAgent, square(5) , (req, res)=> {
    res.json({
        message: 'test route response',
        name: req.myName,
        browser: req.browser,
        number: req.number
    })
});

app.get('/number/:id', square(2) , (req, res)=> {
    console.log(req.params.id)
    res.send(`the result of squaring 2 is ${req.number}`);
});


app.get('/throwing-error', square('hello') , (req, res)=> {
    res.send(`the result of squaring is ${req.number}`);
});




app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}