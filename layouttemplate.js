/*  Templates 3

Functional Requirements:

1.  Go back through each page you have created previous and make an .hbs for each one, use resp.render to render them.

*/

var express = require('express'); // used to make an Express app
var app = express(); // make the app
app.set('view engine', 'hbs'); // use handlebars for template rendering

app.get('/', function (request, response) {
  var context = {title: 'Hello', body: 'Hello World!'};
  response.render('layout.hbs', context);
});

app.get('/cats', function (request, response) {
  var context = {title: 'Cats', body: 'Meow'};
  response.render('layout.hbs', context);
});

app.get('/dogs', function (request, response) {
  var context = {title: 'Dogs', body: 'Woof'};
  response.render('layout.hbs', context);
});

app.get('/cats_and_dogs', function (request, response) {
  var context = {title: 'Cats and Dogs', body: 'Living together'};
  response.render('layout.hbs', context);
});

app.get('/greet/:slug', function (request, response) {
  var slug = request.params.slug;
  var context = {title: 'Greeting', body: 'Hello ' + slug + '!'};
  response.render('layout.hbs', context);
});

app.get('/year', function (request, response) {
  var age = request.query.age || 100; // double-pipe sets the default
  var birthyear = 2017 - age;
  var context = {title: 'Birthyear', body: 'You were born in  ' + birthyear + '.'};
  response.render('layout.hbs', context);
});

app.get('/fav_animals', function (request, response) {
  var render_fav_animals = true;
  var animals = [
    { name: 'cats', favorite: false },
    { name: 'dogs', favorite: true },
    { name: 'tree frogs', favorite: true },
    { name: 'earth worms', favorite: false },
    { name: 'horses', favorite: true },
  ];
  var context = {title: 'Templates 2', render_fav_animals: render_fav_animals, animals: animals};
  response.render('layout.hbs', context);
});

// Listen for requests
app.listen(8000, function() {
  console.log('* Listening on port 8000 *')
});
