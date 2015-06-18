var
  cheerio = require('cheerio'),
  request = require('request');

module.exports = function (callback) {
  request('http://www.matteroftaste.ca', function(err, response, html){
    if(err) return callback(err);

    var 
    $ = cheerio.load(html.toString()),
    code = $('.text_body').children().first().html().match(/\*%.*\"\)/).toString(),
    encoded = code.substring(1, code.length - 2).replace(/\%20/g, ' ');

    callback(null, encoded.split("%0A*").map(function (name) { return name.trimLeft(); }).join('\n'));
  });
};
