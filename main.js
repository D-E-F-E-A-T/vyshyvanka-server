var express = require('express');        // call express
var app = express();
var port = process.env.PORT || 8080;

var router = express.Router();

app.listen(port);