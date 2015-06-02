var express = require('express');        // call express
var app = express();
var port = process.env.PORT || 8080;

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017');
var Ornament = require('./models/ornament.js')

function jsonOut(req, res) {
  return function(err, json) {
    if (err) {
      return res.send(err);
    }
    res.json(json);
  }
}

var router = express.Router();
router.route('/ornaments')
  .post(function(req, res) {
    var ornament = new Ornament();
    ornament.save(jsonOut(req, res));
  })
  .get(function(req, res) {
    Ornament.find(jsonOut(req, res));
  });

router.route('/ornaments/:ornamentId')
  .post(function(req, res) {})
  .get(function(req, res) {
    Ornament.findById(req.params.ornamentId, jsonOut(req, res));
  })
  .put(function(req, res) {});

app.use('/resources', router);


app.listen(port);
console.log("listening on " + port)