const EventEmitter =
require('events');

class RentalEvents
extends EventEmitter {}

module.exports =
new RentalEvents();