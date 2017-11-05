/*  Templates 2

Functional Requirements:

1.  Using the array below, create a page at the URL /fav_animals that will render an ordered list of those animals which are your favorite.

var animals = [
  { name: 'cats', favorite: true },
  { name: 'dogs', favorite: true },
  { name: 'tree frogs', favorite: true },
  { name: 'earth worms', favorite: false },
  { name: 'guinea pigs', favorite: true },
];

*/

var express = require('express'); // used to make an Express app
var app = express(); // make the app
app.set('view engine', 'hbs'); // use handlebars for template rendering

app.get('/', function (request, response) {
  response.send('Hello World');
});

// Functional Requirement #1 - create a page at the URL /fav_animals that will render an ordered list of those animals which are your favorite.
app.get('/fav_animals', function (request, response) {
  var animals = [
    { name: 'cats', favorite: false },
    { name: 'dogs', favorite: true },
    { name: 'tree frogs', favorite: true },
    { name: 'earth worms', favorite: false },
    { name: 'horses', favorite: true },
  ];
  var context = {title: 'Templates 2', animals: animals};
  response.render('animals.hbs', context);
});

// Listen for requests
app.listen(8000, function() {
  console.log('* Listening on port 8000 *')
});
