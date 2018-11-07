var express = require('express');
var app = express();
var path = require('path');

var PORT = process.env.PORT || 8080;

app.use(express.static('dist/'));

app.use('/css',express.static('css/'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(PORT,function(){
	console.log("Server Started",PORT);
});
