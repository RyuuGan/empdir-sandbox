define(function(require) {

  var BaseView = require('util/BaseView')
    , $ = require('jquery');

  return BaseView.extend({

    template: require('jade!templates/auth/login'),

    events: {
      'show': 'show',
      'click #btnLogin': 'doLogin',
      'keypress input': 'loginOnEnter'
    },

    show: function(ev) {
      this.$('#username').focus();
      $('a[href="/auth/login"]').addClass('active');
    },

    doLogin: function(ev) {
      $.ajax({
        type: 'post',
        url: '/api/auth/login',
        data: {
          username: $('#username').val(),
          password: $('#password').val()
        },
        dataType: 'json',
        success: function() {
          alert('Success!');
        },
        error: function() {
          alert('Fail!');
        }
      });
    },

    loginOnEnter: function(ev) {
      if (ev.keyCode == '13')
        this.doLogin(ev);
    }

  });

});