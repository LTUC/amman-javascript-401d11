'use strict';

const io = require('socket.io-client');

let host = 'http://localhost:3000';

// https://herokuapp.heroku.com

const brainConnection = io.connect(host);

brainConnection.on('brightness', payload=> {
    if (payload.brightness >= 75) {
        console.log('Cover your eyes ... !')
    }
})