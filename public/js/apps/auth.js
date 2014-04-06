define(function(require) {

  var Backbone = require('backbone')
    , app = require('app');

  var TopNav = require('widgets/TopNav');

  new TopNav().render('#topnav');

  var Router = Backbone.Router.extend({

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
    },

    loadView: function(selector, view) {
      if (this.currentView && this.currentView.remove) {
        this.currentView.remove();
      }
      this.currentView = view;
      view.render(selector);
    }

  });

  app.router = new Router();

  Backbone.history.start({
    pushState: true
  });

  require('util/pushStateLinks')();

});