var
  express = require('express'),
  scraper = require('./scraper');

function bindRoutes(app) {
  app.post('/mot', function(req, res) {
    scraper(function(err, result) {
      if (err) 
        return res.send({
          text: 'Oh noes! Something went horribly horribly wrong.'
        });

        res.send({
          text: result
        });
    });
  });

  app.get('/mot', function(req, res) {
    scraper(function(err, result) {
      if (err) 
        return res.render('<h3>Oh noes! Something went horribly horribly wrong.</h3>');

      var list = result.split('\n').reduce(function (html, item) {
        html += '<li>' + item + '</li>';
        return html;
      }, '');
      res.send('<ul>' + list + '</ul>');
    });
  });
}

module.exports = {
  start: function () {
    var 
      app = express(),
      port = process.env.port ? process.env.port : 4400,
      bodyparser = require('body-parser');

    app.use(bodyparser.json()); // for parsing application/json
    app.use(bodyparser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    bindRoutes(app);

    app.listen(port);

    console.log('up and running on port', port);
  }
};

