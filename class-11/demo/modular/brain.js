'use strict';

const events = require('./events-pool');

require('./body-parts/eyes/index.js');
require('./body-parts/arms/index.js')


// events.emit('light', {brightness: 80});

events.emit('light', {brightness: 90});

// events.emit('light', {brightness: 20});

// events.on('light-detected', (payload)=> {
    // events.emit('light', {brightness: payload})
// });
