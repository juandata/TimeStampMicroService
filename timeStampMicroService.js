 /******************************************************
 * This is the timestamp server file
 * Developed by JDA to potential clients
 * ***************************************************/

   var path = require('path')
   var express = require('express');
   var app = express();
   var fs = require('fs');
   var url = require('url');
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
     function Unix_timestamp(t)
{
var dt = new Date(t*1000);
var hr = dt.getHours();
var m = "0" + dt.getMinutes();
var s = "0" + dt.getSeconds();
return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
};
//app.use(express.static('public'));
app.use(function (req, res, next) {
  //console.log("Middleware de nivel de aplicación sin ninguna vía de acceso de montaje"); 
    var date = req.url.substr(1);
    var miliseconds = parseInt(date);
    var unixDate = new Date(miliseconds);
  
    if(unixDate == "Invalid Date"){
    var regExpr = /%/;
    date = date.split(regExpr);
    console.log('divided : ', date);
        
      //console.log("the date is wrong");
       }
  else {  
var n = parseInt(date);
var r = Unix_timestamp(n);
console.log(r);
       
  }
  next();
}
); 

app.use('/public', express.static('/app/public'));
/*
app.get('/', function(req, res) {
    console.log("this never appears"); 
   //var urlObject = url.parse(req.url, true);
  //console.log(urlObject);
  res.sendFile('index.html', { root: __dirname + '/views/'})
  //res.sendFile(__dirname + '/views/index.html')
  //var query = req.query;
  //res.send(query);
  //console.log(query);
 
})*/

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});
