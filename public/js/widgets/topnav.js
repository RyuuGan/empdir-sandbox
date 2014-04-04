define(function(require) {

  var $ = require('jquery')
    , BaseView = require('util/BaseView');

  return BaseView.extend({

    template: require('jade!templates/topnav')

  });

});