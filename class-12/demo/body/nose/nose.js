'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3000/health-system';

const healthConnection = io.connect(host);

healthConnection.on('flu-warning', payload=> {
    console.log('RUnning nose ... :P', payload)
});