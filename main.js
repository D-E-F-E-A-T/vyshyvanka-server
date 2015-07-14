var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var restify = require('express-restify-mongoose');
var cors = require('cors');
var morgan = require('morgan');
 
mongoose.connect('mongodb://localhost/database');
 
var Ornament = require('./models/ornament');
 
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(cors());
app.use(function(req, res, next) {
  console.log(req.body);
  next();
});
 
var router = express.Router();
restify.serve(router, Ornament);
app.use(router);
 
app.listen(3000, function() {
    console.log("Express server listening on port 3000");
});