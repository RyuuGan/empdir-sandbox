require.config({
  baseUrl: '/js',
  paths: {
    "jquery": 'lib/jquery/dist/jquery',
    "backbone": "lib/backbone-amd/backbone",
    "underscore": "lib/underscore-amd/underscore",
    "jade": "lib/require-jade/jade"
  }
});

define(function(require) {

  var Backbone = require('backbone');

  var Router = Backbone.Router.extend({

    routes: {

      'auth/login': function() {
        var View = require('views/auth/login');
        new View().render();
      },

      'auth/signup': function() {
        var View = require('views/auth/signup');
        new View();
      },

      '*path': function() {
        Backbone.history.navigate('auth/login', { trigger: true });
      }

    }

  });

  new Router();

  Backbone.history.start({
    pushState: true
  });

});