'use strict';

const port = process.env.PORT || 3000;
// home route '/'
const io = require('socket.io')(port);

// have a namespace/segment
// the brain wants to talk to the health system: heart
// the brain wants to talk to the digestive system: stomach / guts ..

// health system 
const healthSystem = io.of('/health-system');  //localhost:3000/health-system

io.on('connection', (socket)=> {
    console.log('CONNECTED', socket.id);
    socket.on('light', payload=> {
        io.emit('brightness', {brightness: payload.level});
    });
})

healthSystem.on('connection', (socket)=> {
    console.log("CONNECTED TO HEALTH SYSTEM: ", socket.id);
    socket.on('cold', (payload)=> {
        healthSystem.emit('flu-warning', payload);
    });
})