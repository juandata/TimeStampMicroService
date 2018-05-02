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
app.use(express.static('public'));

app.get('/', function(req, res) {
  //res.sendFile('index.html', { root: __dirname + '/views/'})
  res.sendFile(__dirname + '/views/index.html')
})

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});
