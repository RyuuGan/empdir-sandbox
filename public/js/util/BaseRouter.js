"use strict";

define(function(require) {

  var Backbone = require('backbone');

  return Backbone.Router.extend({

    loadView: function(selector, view) {
      if (this.currentView && this.currentView.remove) {
        this.currentView.remove();
      }
      this.currentView = view;
      view.render(selector);
    }

  });

});