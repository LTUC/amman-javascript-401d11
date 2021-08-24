'use strict';

const client = require('socket.io-client');
const host = "http://localhost:3000/family";

const socket = client.connect(host);

// pulling msgs 
socket.emit('get_all');

socket.on('chore', msg=> {
    console.log("child got this msg: ", msg)
    socket.emit('received', msg)
})