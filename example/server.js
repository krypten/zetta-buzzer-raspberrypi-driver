var zetta = require('zetta');
var Buzzer = require('../index');

zetta()
  .use(Buzzer, 17)
  .listen(1337);
