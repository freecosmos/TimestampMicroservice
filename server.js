"use strict";

var express = require('express');
var routes = require('./app/routes/index.js');

var app = express();

app.use(express.static(__dirname + '/public'));

routes(app);

var port = process.env.PORT || 3000;
var host = process.env.HOST || '0.0.0.0';
app.listen(port, host,function(){
    console.log("Listening on port 3000...")
});
