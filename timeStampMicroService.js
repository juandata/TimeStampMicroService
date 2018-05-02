 /******************************************************
 * This is the timestamp server file
 * Developed by JDA to potential clients
 * ***************************************************/

   var path = require('path')
   var express = require('express');
   var app = express();
   app.use(express.static('/index.html'||path.join(__dirname, 'views')));
   app.listen(process.env.PORT);