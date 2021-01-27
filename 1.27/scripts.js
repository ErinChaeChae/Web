/*!
    * Start Bootstrap - Creative v6.0.4 (https://startbootstrap.com/theme/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


  // fphouse logo change
  $(document).ready(function () {
    $(document).scroll(function () {
      if ($(document).scrollTop() > 100) {
        $('#logo').attr('src', "img\\logo.png");
      }
      else {
        $('#logo').attr('src', "img\\logo_white.png");
      }
    });
  });

  // subnav fphouse logo change
  $(document).ready(function () {
    $(document).scroll(function () {
      if ($(document).scrollTop() > 80) {
        $('#logo2').attr('src', "img\\logo.png");
        document.getElementById("subnav1").style.backgroundColor = "#ffffff";
        document.getElementById("subnav1").style.color = "#000000";
      }
      else{
        $('#logo2').attr('src', "img\\logo_white.png");
        document.getElementById("subnav1").style.backgroundColor = "transparent";
        document.getElementById("subnav1").style.color = "#ffffff";
      }
    });
  });

  //submenu mouse event
  $(document).ready(function () {
    $(".nav-item").mouseenter(function () {
      $(".smenu").hide();
      var a = $(this).attr("id");
      $('#s' + a).show(200);
    });

    $(".smenu").mouseleave(function () {
      $(this).hide();
    });
  });


  //click navigation
  $("ul ll a").click(function () {
    var direction = $(this).attr("href");
    scrolling(direction);
    return false; //block the original event
  });

})(jQuery);