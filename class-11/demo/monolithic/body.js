const Events = require('events');

const events = new Events(); //event pool 

// add as many listeners as I want ...
events.on('light', eyeLid);
events.on('light', arms);


function eyeLid(payload) {
    console.log("eyelid closing .....", payload.brightness)
}

function arms(payload) {
    console.log("Covering eyes ..... XD ", payload.brightness)
}

events.emit('light', {brightness: '75%'});
events.emit('light', {brightness: '15%'});
events.emit('light', {brightness: '20%'});
