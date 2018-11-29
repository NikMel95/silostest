const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require("fs");

const app = express();
const port = 5000;
const clientDir = '';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, clientDir + '/dist/frontend')));

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
  res.sendFile(path.join(__dirname, clientDir + '/dist/frontend', 'index.html'));
});

app.listen(port, () => console.log(`Port server: ${port}`));