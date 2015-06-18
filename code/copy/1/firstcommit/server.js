var express = require('express');

module.exports = {
  start: function () {
    var 
      app = express(),
      port = process.env.port ? process.env.port : 4400,
      bodyparser = require('body-parser');

    app.use(bodyparser.json()); // for parsing application/json
    app.use(bodyparser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

    app.listen(port);

    console.log('up and running on port', port);
  }
};

