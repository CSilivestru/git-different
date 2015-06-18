
var request = require('request');

module.exports = function (callback) {
  request('http://www.matteroftaste.ca', function(err, response, html){
    if(err) return callback(err);

    console.log(html);

    callback(null, 'coffee list');
  });
};
