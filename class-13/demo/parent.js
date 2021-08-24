'use strict';

const client = require('socket.io-client');
const host = "http://localhost:3000/family";

const socket = client.connect(host);

// take the task value from argument form the terminal
// console.log(process.argv)
const value = process.argv.splice(2)[0];
console.log("value : ", value);

socket.emit('new_chore', value);


// socket.emit('new_chore', "wash the dishes");


socket.on('added', payload=> {
    console.log("Thank you for adding : ", payload , " to the queue");
    socket.disconnect();
});

// const chores = [
//     'clean yor room', 
//     'water the plants'
// ];

// chores.forEach(chore=> {
//     socket.emit('new_chore', chore)
// });

