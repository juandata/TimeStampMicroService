 /******************************************************
 * This is the timestamp server file
 * Developed by JDA to potential clients
 * ***************************************************/

   var path = require('path')
   var express = require('express');
   var app = express();
   var fs = require('fs');
  

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

app.get('/', function(req, res) {
  console.log("get method of app midlleware function called");
  app.use(express.static('/public/'))
  res.sendFile('index.html', { root: __dirname + '/views/'})
})
app.get('/public/sty', function(req, res) {
  console.log("get method of app midlleware function called");
  app.use(express.static('/public/'))
  res.sendFile('index.html', { root: __dirname + '/views/'})
})

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});
