$(document).ready(function() {

  // Scroll on buttons
  $('.js--scroll-to-contact').click(function () {
    // the animation scrolls to the top of the js--section-plans with a speed of 1000ms
    $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000)
  });

  // Navigation scroll
  // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // Grab height of fixed navigation
        var navHeight = $('nav').outerHeight();
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - 80
            }, 1000, function() {
              // Callback after animation
              // Don't scroll on focus!
                $.fn.focusNoScroll = function(){
                  var x = window.scrollX, y = window.scrollY;
                  this.focus();
                  window.scrollTo(x, y);
                  return this; //chainability

                };
                // Must change focus, but don't scroll!
              var $target = $(target);
              $target.focusNoScroll();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focusNoScroll(); // Set focus again
              };
            });
          }
        }
      });



  // Sticky navigation
  $('.js--section-intro').waypoint(function(direction) {
    if (direction === "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px'
  })


  // Mobile Navigation
  // Clicking on the hamburger menu and a link inside the menu fires slideToggle event
  $('.js--nav-icon, .js--nav-menu a').click(function(element) {
    var nav = $('.js--nav-menu');
    var icon = $('.js--nav-icon>i');
    var logo = $('.jumbotron');

    //Gets the class name of the element that triggered the event
  	//var clicked = element.target.className;

 		//Exits the function if the menu is closed
    // if (icon.hasClass('fa-bars'))
    //   return;

    // Toggle the menu box open in 0.2 seconds
    if ($(window).width() < 846){
      nav.slideToggle(200)
    }

    // Remove hamburger icon and add cross
    if (icon.hasClass('fa-bars')) {
      icon.addClass('fa-times');
      icon.removeClass('fa-bars');
      // logo.css("display","none");

    } else {
      // Remove cross icon and add hamburger
      icon.addClass('fa-bars');
      icon.removeClass('fa-times');
      // logo.css("display","initial");

    }
  });

  $(window).resize(function() {
  var nav = $('.js--nav-menu');
  var icon = $('.js--nav-icon i');

  if ($(window).width() > 846) {
    nav.css("display", "block");
    icon.addClass('fa-times');
    icon.removeClass('fa-bars');
  } else {
    nav.css("display", "none");
    icon.addClass('fa-bars');
    icon.removeClass('fa-times');
  }

	});

});
