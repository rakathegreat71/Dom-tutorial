var express = require("express");
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, function (req, res) {
	console.log("server started at port 3000.....");
})

app.get("/", function(req, res){
	res.sendFile(__dirname + '/index.html');
})