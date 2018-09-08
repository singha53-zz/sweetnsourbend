var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var data = require('./data.js');

var waitingArryay = data.waitingArray;
var tableArray = data.tableArray;

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/tables', function(req, res) {
  res.json(tableArray);
});

app.get('/', function(req, res) {
  res.send('Hello afkdjakfljalfjlkajglkjglkajglkdjworld');
});

app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});
