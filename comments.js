// Create web server
// Create a route for /comments
// Send a JSON response with some comments
// Start the server on port 3000

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  // Read comments from file
  fs.readFile('comments.json', function(err, data) {
    if (err) {
      console.log(err);
      response.writeHead(500, {'Content-Type': 'text/plain'});
      response.end('Error occurred');
    } else {
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.end(data);
    }
  });
});

// Listen on port 3000, IP defaults to