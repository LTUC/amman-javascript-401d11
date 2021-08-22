const Events = require('events');
const events = new Events();

// export ONE INSTANCE of events
// this is singleton ..
module.exports = events;