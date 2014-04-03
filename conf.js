'use strict';

var Configuration = require('circumflex').Configuration;

module.exports = new Configuration({

  root: __dirname,

  port: '44000',

  host: '127.0.0.1:44000',

  staticHost: '127.0.0.1:44000',

  secureHost:  '127.0.0.1:44000',

  cookies: {
    secret: 'USE PASSPHRASE TO PROTECT YOUR COOKIES'
  },

  session: {
    ttl: 600,  // session timeout in seconds
    secret: 'USE PASSPHRASE TO PROTECT YOUR SESSIONS'
  },

  redis: {
    host: '127.0.0.1',
    port: '44001'
  },

  mongo: {
    url: 'mongodb://127.0.0.1/empdir'
  },

  development: {

    errorHandler: {
      dumpExceptions: true,
      showStack: true
    },

    loggerOptions: 'dev'

  }

});