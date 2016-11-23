var http = require("http");
var express = require("express");
var app = express();

app.set('views', __dirname + '/views');
app.set("view engine", "pug");

app.get("/:datestr", function(req,res){
    var datestr = req.param.datestr;
    if(datestr){
      res.end("processing request");      
    }
    else{
      res.render('index', { title: 'Hey', message: 'Hello there!' });
    }
});

var server = http.createServer(app);
server.listen(process.env.PORT || 8080);
console.log("app started");
