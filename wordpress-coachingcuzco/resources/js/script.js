$(document).ready(function() {

  // Scroll on buttons - method 1
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
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
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
  $('.js--nav-icon').click(function() {
    var nav = $('.js--nav-menu');
    var icon = $('.js--nav-icon>i');

    // Toggle the menu box open in 0.2 seconds
    if ($(window).width() < 768){
      nav.slideToggle(200);
    }

    // Remove hamburger icon and add cross
    if (icon.hasClass('fa-bars')) {
      icon.addClass('fa-times');
      icon.removeClass('fa-bars');
    } else {
      // Remove cross icon and add hamburger
      icon.addClass('fa-bars');
      icon.removeClass('fa-times');
    }

  });

});
