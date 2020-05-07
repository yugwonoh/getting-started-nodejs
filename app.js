var express = require('express');
var app = express();
var cities = {cities:["Amsterdam","Berlin","New York","San Francisco","Tokyo", "Delhi"]}

app.get('/', function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(cities));
    res.end();
});
app.get("/error", (req, res) => {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end();
})
app.get('/health', (req, res) => res.send({"status": "OK", "time": new Date()}))
var port = process.env.PORT || 8080;
app.listen(port);

setInterval(function(str1, str2) {
    var text = makeid(40);
    var ran = Math.random()
    if (ran > 0.75)
        text = makeid(40)+ " "+makeid(40)+ " "+makeid(40)+ " "+makeid(40)
    else if (ran > 0.5)
        text = makeid(40)+ " "+makeid(40)+ " "+makeid(40)
    else if (ran > 0.25)
        text = makeid(40)+ " "+makeid(40)
  console.log(str1 + " " + str2 + " "+text+ " "+makeid(40)+" args 2 "+process.argv);
}, 800, "Hello.", "How are you?");

function makeid(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

module.exports = app;
