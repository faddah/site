var path = require('path');
var Hapi = require('hapi');

var server = new Hapi.Server(8000, {
  files: {
    relativeTo: path.join(__dirname, 'public')
  }
});

server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: '.',
      listing: true
    }
  }
});

server.start(function () {
  // body...
});
