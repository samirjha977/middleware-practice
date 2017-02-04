var express = require('express');
var app = express();
var middleware = require('./app.middleware');


app.use(middleware);

app.get('/', function (req, res) {
  res.send("middleware exercise");
});

app.listen(3000);
