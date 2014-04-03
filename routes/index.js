'use strict';

var $ = require('../app').main
  , jade = require('jade');

$.get('/templates/*.jade', function(req, res, next) {

});

$.get('/', function(req, res, next) {
  res.render('static/index');
});

$.get('/auth*', function(req, res, next) {
  res.render('static/auth');
});

$.get('/mgmt*', function(req, res, next) {
  res.render('static/mgmt');
});

