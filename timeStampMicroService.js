/******************************************************
 * This is the timestamp server file
 * Developed by JDA to potential clients
 * ***************************************************/

var path = require('path')
var express = require('express');
var app = express();
var fs = require('fs');
var url = require('url');
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  jsonResp = {},
  readableDate = "";

function Unix_timestamp(t) {
  var dt = new Date(t * 1000);
  var month = dt.getMonth();
  var day = dt.getDate();
  var year = dt.getFullYear();
  return months[month] + ' ' + day + ', ' + year;
};
app.use(function(err, req, res, next){
  console.log("there was an error");
});
app.use(function(req, res, next) {
  var date = req.url.substr(1);
  var miliseconds = parseInt(date);
  var unixDate = new Date(miliseconds);
  if (unixDate == "Invalid Date") {
    var regExpr = /%/;
    date = date.split(regExpr);
    var date1 = new Date(date[0] + " " + date[1] + "," + date[2]);
    if (date1 == "Invalid Date") {
      jsonResp = {
        "unix": null,
        "natural": null
      };
      res.json(jsonResp);
    } else {
      var date2 = date1.getTime();
      var timestamp = Math.floor(date2 / 1000);
      jsonResp = {
        "unix": timestamp,
        "natural": date[0] + " " + date[1] + "," + date[2]
      };
      res.json(jsonResp);
    }
  } else {
    readableDate = Unix_timestamp(date);
    jsonResp = {
      "unix": miliseconds,
      "natural": readableDate
    };

    res.json(jsonResp);
  }
  next();
});

app.use('/public', express.static('/app/public'));

app.all('*', function(req, res){
  throw new Error("Bad request");
        });
app.use(function(e, req, res, next) {
    if (e.message === "Bad request") {
      //  res.status(400).json({error: {msg: e.message, stack: e.stack}});
      console.log("bad");
    }
});

app.listen(process.env.PORT, function() {
  console.log('Node.js listening ...');
});
