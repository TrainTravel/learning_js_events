const EventEmitter = require('events');
const eventConfig = require('./config').events;
//const EventEmitter = require('./emitter'); 

class MyEmitter extends EventEmitter {}

//const myEmitter = new MyEmitter();
//myEmitter.on('event', () => {
//  console.log('an event occurred!');
//});
//myEmitter.emit('event');

//const emitter = myEmitter.on('event', function(a, b) {
//  console.log(a, b, this, this === myEmitter);
//  // Prints:
//  //   a b MyEmitter {
//  //     domain: null,
//  //     _events: { event: [Function] },
//  //     _eventsCount: 1,
//  //     _maxListeners: undefined } true
//});

//console.log(emitter);
//myEmitter.emit('event', 'a', 'b');
const emtr = new MyEmitter();

emtr.on(eventConfig.GREET, function() {
    console.log('Someone said hello.');
})

emtr.on(eventConfig.GREET, function() {
    console.log('A greeting occurred');
})

console.log('Hello');
emtr.emit('greet');
