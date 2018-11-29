const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const fs = require("fs");
app = express();
app.use(serveStatic(__dirname + '/dist/frontend'));

app.get('/api/towers', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Pragma", "no-cache");
  res.header("Expires", 0);
  res.header("Content-Type",'application/json');
  
  fs.readFile( __dirname +'/data.json', 'utf8', function (err, data) {
    res.send(data);
    res.end( data );
  });
  res.status(200);
});
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/frontend', 'index.html'));
});
var port = process.env.PORT || 5000;
app.listen(port);