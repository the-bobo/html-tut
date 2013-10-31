var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();
app.use(express.logger());
app.use(express.static(path.join(__dirname, 'public')));

var hello = fs.readFileSync("index.html").toString();

app.get('/', function(request, response) {
  response.send(hello);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});