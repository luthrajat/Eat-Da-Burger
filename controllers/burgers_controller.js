var express = require('express');
var expressRouter = express.Router();
var burger = require('../models/burger.js');

expressRouter.get('/', function(req, res) {
  res.render('index');
});

expressRouter.get('/index', function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    }
    res.render('index', hbsObject);
  });
});

expressRouter.post('/burgers/create', function(req, res) {
  burger.create(req.body.burgername, function(data) {
    res.redirect('/index')
  });
});

expressRouter.post('/burgers/update/:id', function(req, res) {
  var id = req.params.id;
  burger.update(id, function(data) {
    res.redirect('/index');
  });
});

module.exports = expressRouter;