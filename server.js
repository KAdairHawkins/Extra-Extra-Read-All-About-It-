const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const exphbs = require('express-handlebars');
const path = require('path');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: false
}))

// app.use(methodOverride('_method'));
// app.engine('handlebars', exphbs({
//     defaultLayout: 'main'
// }));
// app.set('view engine', 'handlebars');
// var routes = require('./controllers/controller.js');
// app.use('/', routes);

app.listen(process.env.PORT || 3001, function(){
  console.log("app listening on on " + process.env.PORT || 3001);
});
