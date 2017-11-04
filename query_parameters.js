/*  Route Parameters

Functional Requirements:

1.  Make an express program that will display "Hello, world!" at the root URL: /
2.  Add a route for URL /cats, display "Meow"
3.  Add a route for URL /dogs, display "Woof"
4.  Add a route for URL /cats_and_dogs, display "Living together"
5.  Say a greeting to the User, given that the User's name is encoded inside the URL.  For Example, if you go to the URL:
    a.  /greet/Kennedy is should say "Hello, Kennedy!"
    b.  /greet/Jamison is should say "Hello, Jamison!"
    c.  /greet/Manny is should say "Hello, Manny!"
    d.  etc...
6.  Display the year you were born when you report your age in a query parameter. For example, when you go to the URL:
    -  /year?age=32 it will display You were born in 1985.

*/

var express = require('express'); // used to make an Express app
var app = express(); // make the app

// Functional Requirement #1 - display "Hello, world!" at the root URL: /
app.get('/', function (request, response) {
  response.send('Hello World');
});

// Functional Requirement #2 - Add a route for URL /cats, display "Meow"
app.get('/cats', function (request, response) {
  response.send('Meow');
});

// Functional Requirement #3 - Add a route for URL /dogs, display "Woof"
app.get('/dogs', function (request, response) {
  response.send('Woof');
});

// Functional Requirement #4 - Add a route for URL /cats_and_dogs, display "Living together"
app.get('/cats_and_dogs', function (request, response) {
  response.send('Living together');
});

// Functional Requirement #5 - Say a greeting to the User, given that the User's name is encoded inside the URL
app.get('/greet/:slug', function (request, response) {
  var slug = request.params.slug;
  response.send('Hello ' + slug + '!');
});

// Functional Requirement #6 - Display the year you were born when you report your age in a query parameter
app.get('/year', function (request, response) {
  var age = request.query.age || 100; // double-pipe sets the default
  var birthyear = 2017 - age;
  response.send('You were born in  ' + birthyear + '.');
});

// Listen for requests
app.listen(8000, function() {
  console.log('* Listening on port 8000 *')
});
