'use strict';

var $ = require('../app').main
  , jade = require('jade');

// Page module

$.get('/', function(req, res, next) {
  req.url = '/page/index';
  next();
});

$.get('/page/*', function(req, res, next) {
  res.render('static/page/' + req.params[0]);
});

// Auth module

$.get('/auth/*', function(req, res, next) {
  res.render('static/auth');
});



