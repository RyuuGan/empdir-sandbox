define(function(require) {

  var BaseView = require('util/BaseView')
    , $ = require('jquery');

  return BaseView.extend({

    template: require('jade!templates/auth/signup'),

    events: {
      'show': 'show'
    },

    show: function(ev) {
      $('a[href="/auth/signup"]').addClass('active');
    }

  });

});