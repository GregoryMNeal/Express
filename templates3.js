//  Templates 3

var express = require('express'); // used to make an Express app
var app = express(); // make the app
app.set('view engine', 'hbs'); // use handlebars for template rendering
app.use(express.static('public')); // set up the app to serve files from the public folder

app.get('/', function (request, response) {
  var context = {title: 'Hello', message: 'Hello World!'};
  response.render('helloworld.hbs', context);
});

app.get('/cats', function (request, response) {
  var context = {title: 'Cats', message: 'Meow'};
  response.render('cats.hbs', context);
});

app.get('/dogs', function (request, response) {
  var context = {title: 'Dogs', message: 'Woof'};
  response.render('dogs.hbs', context);
});

app.get('/cats_and_dogs', function (request, response) {
  var context = {title: 'Cats and Dogs', message: 'Living together'};
  response.render('catsanddogs.hbs', context);
});

app.get('/greet/:slug', function (request, response) {
  var slug = request.params.slug;
  var context = {title: 'Greeting', message: 'Hello ' + slug + '!'};
  response.render('greeting.hbs', context);
});

app.get('/year', function (request, response) {
  var age = request.query.age || 100; // double-pipe sets the default
  var birthyear = 2017 - age;
  var context = {title: 'Birthyear', message: 'You were born in  ' + birthyear + '.'};
  response.render('birthyear.hbs', context);
});

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
