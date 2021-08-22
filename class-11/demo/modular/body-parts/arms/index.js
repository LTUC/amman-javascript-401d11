'use strict';

const events = require('../../events-pool');

events.on('light', coverEyes);

function coverEyes(payload) {
    if (payload.brightness >= 90) {
        console.log("Covering my eyes with my arms \\\____/ ", payload.brightness)
    }
}

