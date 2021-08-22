'use strict';

const events = require('../../events-pool');

events.on('light', eyelid);

function eyelid(payload) {
    if (payload.brightness >= 75) {
        console.log("Closing eyes... ", payload.brightness)
    }
}

