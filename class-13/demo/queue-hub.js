'use strict';

const uuid = require('uuid').v4
// keep port in dotenv
const io = require('socket.io')(3000);
// can be stored in a database/ cache/ ...
// my queue is an object
// keyed queue

//  there will be no ordered preserved
const msgQueue = {
    chores : {}
}

const family = io.of('/family'); //namespace
family.on('connection', socket=> {
    console.log("CONNECTED", socket.id)
    // when the parent adds a new chore
    socket.on('new_chore', payload=> {
        console.log("adding a new task ....")
        const id = uuid();
        console.log("id ====> ", id)
        msgQueue.chores[id] = payload;
        socket.emit('added', payload); // telling the parent a task was added
        family.emit('chore', {id: id, payload: msgQueue.chores[id]});
        console.log("after add msgQueue ========> ", msgQueue)
    });

    socket.on('get_all', ()=> {
        console.log("get_all : child wants to get its msgs ")
        Object.keys(msgQueue.chores).forEach(id=> {
            socket.emit('chore', {id: id, payload: msgQueue.chores[id] })
        });
    });

    socket.on('received', msg => {
        console.log("received on queue will remove it ...")
        // he child confirmed receiving , remove from queue
        delete msgQueue.chores[msg.id];
        console.log("after delete msgQueue @@@@@@@@@@ ", msgQueue)
    })
});

// msgQueue: {
//     chores: {
//         "32234443" : 'wash dishes',
//         "23sdf432": "clean your room"
//     }
// }
// ["32234443", "23sdf432"] -> forEach on the array