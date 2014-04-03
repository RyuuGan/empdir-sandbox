'use strict';

var redis = require('redis')
  , conf = require('./conf');

var CLIENT = null;

exports.connect = function(cb) {
  CLIENT = redis.createClient(conf.redis);
  CLIENT.on('error', function(err) {
    console.error(err);
  });
  if (typeof(cb) == 'function')
    cb();
};

exports.disconnect = function(cb) {
  if (CLIENT)
    CLIENT.quit();
  if (typeof(cb) == 'function')
    cb();
};

exports.getClient = function() {
  return CLIENT;
};