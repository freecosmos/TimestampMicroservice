"use strict"

var express = require('express');
var moment = require('moment');

var path = process.cwd();

module.exports = function (app) {

app.get('/', function(req,res){
    res.sendFile(path + '/public/index.html');
});

app.get('/:time', function(req, res){
  var time = req.params.time;
  var response;
  if (isNaN(time) == true) {
     response = {
     unix: moment(time).unix(),
     natural: moment(time).format('MMMM DD, YYYY')
    }
  } else if (isNaN(time) == false) {
      var time = parseInt(time, 10)*1000;
      response = {
      unix: moment(time).unix(),
      natural: moment(time).format('MMMM DD, YYYY')
     }
  } else {
    var response = {
      unix: null,
      natural: null
    }
  }

  res.json(response);
});
};
