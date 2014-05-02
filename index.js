var express = require('express');
var api = require('./api.js');
var app = express();



app.get('/helloworld', function(req, res){
    res.send('Hello World');
});

app.get('/api/Records', api.getAllRecords);

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
