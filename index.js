var request = require('request');

module.exports = findServer;

function findServer(host, startingPort, endingPort, callback) {
  if (startingPort > endingPort) {
    callback(new Error('Could not find server'));
  }
  request(host + ':' + startingPort, function(err) {
    if (err) {
      findServer(host, +startingPort + 1, endingPort, callback);
    } else {
      callback(null, startingPort);
    }
  });  
}
