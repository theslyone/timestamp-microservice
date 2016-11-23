var http = require("http");
var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello world!!!");
});

var server = http.createServer(app);
server.listen(8080);
console.log("app started");
