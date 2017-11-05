/*  Templates

Functional Requirements:

1.  Make the greet page say hello to visitor and tell the year they were born.
2.  Use a .hbs file in the views folder to render the message using HTML

For example, if you go to the URL:

/greet/Manoush?age=32

The server should render the html:

<h1>Hello, Manoush!</h1>
<p>You were born in 1985.</p>

*/

var express = require('express'); // used to make an Express app
var app = express(); // make the app
app.set('view engine', 'hbs'); // use handlebars for template rendering

app.get('/', function (request, response) {
  response.send('Hello World');
});

// Functional Requirement #1 - Make the greet page say hello to visitor and tell the year they were born.
app.get('/greet/:slug', function (request, response) {
  var name = request.params.slug || 'World'; // double-pipe sets the default;
  var age = request.query.age || 100; // double-pipe sets the default
  var birthyear = 2017 - age;
  // Functional Requirement #2 - Use a .hbs file in the views folder to render the message using HTML
  var context = {title: 'Hello', name: name, birthyear: birthyear};
  response.render('hello.hbs', context);
});

// Listen for requests
app.listen(8000, function() {
  console.log('* Listening on port 8000 *')
});
