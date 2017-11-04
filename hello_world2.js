/*  Hello World 2 - Routes

Functional Requirements:

1.  Add a route for URL /cats, display "Meow"
2.  Add a route for URL /dogs, display "Woof"
3.  Add a route for URL /cats_and_dogs, display "Living together"

*/

var express = require('express'); // used to make an Express app
var app = express(); // make the app

// get method for root URL:/
app.get('/', function (request, response) {
  response.send('Hello World');
});

// Functional Requirement #1 - Add a route for URL /cats, display "Meow"
app.get('/cats', function (request, response) {
  response.send('Meow');
});

// Functional Requirement #2 - Add a route for URL /dogs, display "Woof"
app.get('/dogs', function (request, response) {
  response.send('Woof');
});

// Functional Requirement #3 - Add a route for URL /cats_and_dogs, display "Living together"
app.get('/cats_and_dogs', function (request, response) {
  response.send('Living together');
});

// Listen for requests
app.listen(8000, function() {
  console.log('* Listening on port 8000 *')
});
