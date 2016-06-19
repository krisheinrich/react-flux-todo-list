var express = require('express');
var parser = require('body-parser');
var React = require('react');

// Babel-registerfor jsx support in Node
require('babel-register');
// mongoDB instance
require('./database.js');
var GroceryItem = require('./models/GroceryItem.js');

var app = new express();

app.get('/', function (req, res) {
  //res.render('./../app/index.ejs', {});
  
  var application = React.createFactory(require('./../app/components/GroceryItemList.jsx'));
  
  GroceryItem.find(function (err, docs) {
    var generated = React.renderToString(application({ items: docs }));
    
    res.render('./../app/index.ejs', { reactOutput: generated });
  });
})
.use(express.static(__dirname + '/../.tmp'))
.use(express.static(__dirname + '/../bower_components/skeleton/css'))
.listen(7777);

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

require('./routes/items.js')(app);