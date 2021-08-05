'use strict';

const events = require('./lib/events.js');
const vendor = require('./apps/vendor.js');
const driver = require('./apps/driver.js');

events.on('pickup', (payload) => logEvent('pickup', payload));
events.on('in-transit', (payload) => logEvent('in-transit', payload));
events.on('delivered', (payload) => logEvent('delivered', payload));

function logEvent(event, payload) {
  let time = new Date();
  console.log('EVENT', { event, time, payload });
}