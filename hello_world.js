/*  Hello World

Functional Requirements:

1.  Make an express program that will display "Hello, world!" at the root URL: /

*/

var express = require('express'); // used to make an Express app
var app = express();

// get method for root URL:/
app.get('/', function (request, response) {
  response.send('Hello World');
});

// Listen for requests
app.listen(8000, function() {
  console.log('* Listening on port 8000 *')
});
