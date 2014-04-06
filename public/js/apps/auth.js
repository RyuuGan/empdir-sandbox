"use strict";

define(function(require) {

  var Backbone = require('backbone')
    , BaseRouter  = require('util/BaseRouter')
    , app = require('app');

  var TopNav = require('widgets/TopNav');

  new TopNav().render('#topnav');

  var Router = BaseRouter.extend({

    routes: {
      'auth/login': function() {
        var View = require('views/auth/login');
        this.loadView('#main', new View());
      },
      'auth/signup': function() {
        var View = require('views/auth/signup');
        this.loadView('#main', new View());
      },
      '*path': function() {
        Backbone.history.navigate('auth/login', {
          trigger: true,
          replace: true
        });
      }
    }

  });

  app.router = new Router();

  Backbone.history.start({
    pushState: true
  });

  require('util/pushStateLinks')();

});