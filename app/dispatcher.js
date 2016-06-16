// Event emitting dispatcher in Flux architecture pattern
var guid = require('guid');
var listeners = {};

module.exports = {
  // Register events in listerners registry
  register: function (cb) {
    var id = guid.raw();
    listeners[id] = cb;
    return id;
  },
  // 
  dispatch: function (payload) {
    console.info("Dispatching...", payload);
    for (var id in listeners) {
      var listener = listeners[id];
      listener(payload);
    }
  }
};