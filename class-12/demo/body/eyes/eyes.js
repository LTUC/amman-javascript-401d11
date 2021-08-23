'use strict';

const io = require('socket.io-client');

let host = 'http://localhost:3000';

// https://herokuapp.heroku.com

const brainConnection = io.connect(host);

brainConnection.on('brightness', payload=> {
    if (payload.brightness >= 90) {
        console.log('Close your eyes XD ')
    }
});

brainConnection.on('flu-warning', payload=> {
   console.log("eyes flu warning ")
});