"use strict";

var express = require('express');
var routes = require('./index.js');

var app = express();

routes(app);

var port = 3000;
app.listen(port, function(){
    console.log("Listening on port 3000...")
});
