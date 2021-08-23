'use strict';

const io = require('socket.io-client');

let host = 'http://localhost:3000';

// https://herokuapp.heroku.com

const brainConnection = io.connect(host);
const healthConnection = io.connect(`${host}/health-system`);


brainConnection.emit('light', {level: 45});
brainConnection.emit('light', {level: 90});

healthConnection.emit('cold', {temp: -10})
