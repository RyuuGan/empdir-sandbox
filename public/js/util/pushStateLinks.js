define(function(require) {

  var $ = require('jquery')
    , Backbone = require('backbone');

  var openLinkInTab = false;

  return function() {
    $(document).keydown(function(ev) {
      if (ev.ctrlKey || ev.metaKey || ev.keyCode === 91)
        openLinkInTab = true;
    });
    $(document).keyup(function() {
      openLinkInTab = false;
    });
    $(document).delegate("a", "click", function(ev) {
      var href = $(this).attr("href");
      var protocol = this.protocol + "//";
      if (!openLinkInTab && href.slice(protocol.length) != protocol) {
        ev.preventDefault();
        Backbone.history.navigate(href, true);
      }
    });
  }

});