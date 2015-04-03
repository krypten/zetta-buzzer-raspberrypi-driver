var util = require('util');
var AutoScout = require('zetta-auto-scout');
var Buzzer = require('./buzzer');

var GpioScout = module.exports = function(pin) {
  AutoScout.call(this, 'buzzer', Buzzer, pin);
};
util.inherits(GpioScout, AutoScout);
