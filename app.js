var express = require('express');
var app = express();

app.get('/cities.json', function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({insecticons : ["San Francisco","Amsterdam", "Berlin", "New York"]}));
    res.end();
});

var port = process.env.PORT || 5000;
app.listen(port);

module.exports = app;
