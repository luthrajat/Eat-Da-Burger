var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(methodOverride('_method')) // override ?_method=DELETE
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


var PORT = process.env.PORT || 8080;

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);


app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});