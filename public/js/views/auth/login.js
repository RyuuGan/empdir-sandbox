define(function(require) {

  var Backbone = require('backbone');

  return Backbone.View.extend({

    el: this.$('#view'),

    template: require('jade!./login'),

    render: function(data) {
      this.$el.html(this.template(data));
    }

  });

});