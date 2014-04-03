define(function(require) {

  var Backbone = require('backbone')
    , $ = require('jquery');

  var View = Backbone.View.extend({

    el: $('#view'),

    render: function() {
      this.$el.append('SIGNUP');
    },

    initialize: function() {
      this.render();
    }

  });

});