// Generated by CoffeeScript 2.3.1
(function() {
  var autoInput, autoTime, moveToButton, moveToRandom, moveToText, search_submitted, switchMouseCursor;

  autoTime = 233;

  moveToButton = function() {
    return $('#fake_mouse').animate({
      top: $('#search_button').offset().top + 5,
      left: $('#search_button').offset().left + 15
    }, 500, function() {
      return location.href = $('#search').attr('action') + '?' + $('#search').formSerialize();
    });
  };

  moveToText = function() {
    return $('#fake_mouse').animate({
      top: $("#search_query").offset().top + $('#search_query').height() / 2,
      left: $("#search_query").offset().left
    }, 2000, function() {
      return $("#search_query").focus();
    });
  };

  moveToRandom = function(str) {
    var stemp;
    stemp = str;
    return $('#fake_mouse').animate({
      top: "+=5px",
      left: "+=10px"
    }, "fast", function() {
      return autoInput(stemp, 0);
    });
  };

  switchMouseCursor = function() {
    var agent;
    agent = navigator.userAgent;
    if (agent.indexOf("Windows NT")) {
      return $('#fake_mouse').attr("src", "img/mouse_arrow_windows_aero.png");
    } else if (agent.indexOf("Mac OS")) {
      return $('#fake_mouse').attr("src", "img/mouse_arrow_mac.png");
    }
  };

  autoInput = function(str, index) {
    var val;
    val = str.substr(0, index + 1);
    $("#search_query").attr("value", val);
    if (index < str.length) {
      return setTimeout(function() {
        return autoInput(str, index + 1);
      }, Math.random() * autoTime);
    } else {
      return moveToButton();
    }
  };

  search_submitted = function() {
    $('#search_query').value = _.string.trim($('#search_query').val());
    if ($('#search_query').val()) {
      return $("#search_url").html(location.href + '?s=' + $('#search_query').val());
    }
  };

  $(document).ready(function() {
    var wd;
    if (wd = $.url().param('s')) {
      //access with a query
      $('.showOnHome').hide();
      $('.aui-page-panel-inner').show();
      $('#fake_mouse').show();
      return $('#search_query').ready(function() {
        switchMouseCursor();
        moveToText();
        return moveToRandom(wd);
      });
    } else {
      //access directly, without a query
      $('.showOnHome').show();
      $('.aui-page-panel-inner').hide();
      $('#search').submit(function() {
        search_submitted();
        return false;
      });
      return $('#search_button').click(function() {
        search_submitted();
        return false;
      });
    }
  });

}).call(this);
