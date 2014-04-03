'use strict';

var Application = require('circumflex').Application
  , mongoose = require('mongoose')
  , redis = require('./redis')
  , conf = require('./conf');

var app = module.exports = new Application(conf);

app.onRun(function(next) {
  console.log('Connecting Mongo @ %s', conf.mongo.url);
  mongoose.connect(conf.mongo.url, next);
});

app.onShutdown(function(next) {
  console.log('Disconnecting Mongo');
  mongoose.disconnect(next);
});

app.onRun(function(next) {
  console.log('Connecting Redis @ %s:%s', conf.redis.host, conf.redis.port);
  redis.connect(next);
});

app.onShutdown(function(next) {
  console.log('Disconnecting Redis');
  redis.disconnect(next);
});

