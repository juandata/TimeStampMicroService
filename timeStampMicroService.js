 /******************************************************
 * This is the timestamp server file
 * Developed by JDA to potential clients
 * ***************************************************/

   var path = require('path')
   var express = require('express');
   var app = express();
   var fs = require('fs');
   var url = require('url');
  'use strict';
  /* //output hello world
   app.get('/', function(req, res) {
     res.end('Hello World!');
   });
   app.listen(process.env.PORT);
   */
 /*//process the query and outputs it to the res  
app.get('/search', function(req, res){
  var query = req.query;
  res.send(query);
});
app.listen(process.env.PORT);
  */

//app.use(express.static('public'));
app.use('/public', express.static('/app/public'));
var el = process.cwd();
app.get('/', function(req, res) {
   var urlObject = url.parse(req.url, true);
  console.log(urlObject);
  res.sendFile('index.html', { root: __dirname + '/views/'})
  //res.sendFile(__dirname + '/views/index.html')
  //var query = req.query;
  //res.send(query);
  //console.log(query);
 
})

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});
