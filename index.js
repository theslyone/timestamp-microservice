var http = require("http"), express = require("express");
var dateProcessor = require("./date-processor");
var app = express();

app.set('views', __dirname + '/views');
app.set("view engine", "pug");
app.use(express.static(__dirname + '/public'));

app.get("/:datestr", function(req,res){
    var datestr = req.params.datestr;
    console.log("Input date: " + datestr);
    res.end(JSON.stringify(dateProcessor(datestr)));
});

app.get("/", function(req,res){
    res.render('index');
});


var server = http.createServer(app);
server.listen(process.env.PORT || 8080);
console.log("app started");
