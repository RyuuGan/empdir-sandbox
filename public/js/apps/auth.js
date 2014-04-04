define(function(require) {

  var Backbone = require('backbone')
    , app = require('app');

  var TopNav = require('widgets/TopNav');

  new TopNav().render('#topnav');

  var Router = Backbone.Router.extend({

    routes: {
      'auth/login': function() {
        var View = require('views/auth/login');
        new View().render('#main');
      },
      'auth/signup': function() {
        var View = require('views/auth/signup');
        new View().render('#main');
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