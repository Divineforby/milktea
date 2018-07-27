// Main server file

// SERVER DATABASE SETUP

var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var port = process.env.PORT || 8080;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true}));

// ALLOWS CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// SERVING STATIC FILES
app.use('/', express.static(__dirname + '/client/build'));

// SERVES THE INDEX PAGE
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html');
});

// ROUTING
var login = require(__dirname + '/routes/login'); app.use('/login', login);
var reg = require(__dirname + '/routes/register'); app.use('/register', reg);
var prof = require(__dirname + '/routes/profile'); app.use('/profile', prof);
var transaction = require(__dirname + '/routes/transaction'); app.use('/transaction', transaction);
var friendship = require(__dirname + '/routes/friendship'); app.use('/friendship', friendship);

app.listen(port, '0.0.0.0', function() {
  console.log('App is listening on port ' + port);
})
