var express = require('express');

var app = new express();

app.get('/', function (req, res) {
  res.render('./../app/index.ejs', {});
})
.use(express.static(__dirname + '/../.tmp'))
.use(express.static(__dirname + '/../bower_components/skeleton/css'))
.listen(7777);

console.log("Listening on port 7777....");