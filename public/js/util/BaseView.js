define(function(require) {

  var Backbone = require('backbone')
    , $ = require('jquery')
    , _ = require('underscore')
    , app = require('app');

  return Backbone.View.extend({

    render: function(target, data) {
      var container = $(target);
      var templateData = _.extend({}, app, this.data, data);
      this.$el.html(this.template(templateData));
      $('nav *').removeClass('active');
      container.html(this.$el);
      this.$el.trigger('show');
    }

  });

});