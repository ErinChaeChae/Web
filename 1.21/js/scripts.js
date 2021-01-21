/*!
    * Start Bootstrap - Creative v6.0.4 (https://startbootstrap.com/theme/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
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
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
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
  $(document).ready(function() {
    $(document).scroll(function() {
      if ($(document).scrollTop()>100){
          $('#logo').attr('src', "img\\logo.png");
        }
      else {
          $('#logo').attr('src', "img\\logo_white.png");
        }
      });
});

//submenu에 마우스 얹었을 때
 $(document).ready(function(){
  $(".nav-item").mouseenter(function(){
    $(".smenu").hide();
    var a =$(this).attr("id");
    $('#s'+ a).show(200);
  });

  $(".smenu").mouseleave(function(){
    $(this).hide();
  });
 });



 $("ul ll a").click(function(){ //click navigation
   var direction = $(this).attr("href");
   scrolling(direction);
   return false; //block the original event
 });


/*modal 바깥을 클릭하면 안보이게 하는것을 의도하였지만 성공되지 못한 부분*/
$(document).on("click", function(e){
  if($("#modal").is(e.target)){
     $("#modal").css({ visibility:"hidden", opacity:0});
  }
});

})(jQuery); // End of use strict
