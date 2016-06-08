//console.log('\'Allo \'Allo!');
'use strict';

//toggle navbar class:
$('.handle').on('click', function() {
  $('nav ul').toggleClass('showing');
  $('.hamburger').toggleClass('is-active');
  console.log('menu active');
});

//close navbar on select
$('nav ul li').on('click', function(){
  $('nav ul').toggleClass('showing');
  $('.hamburger').toggleClass('is-active');
})

$(document).ready(function(){
  
  // Run this code when window is resized
  $(window).resize(function(){
    
    // Variables
    var windowHeight = $(window).height();
    
    // Find the value of 90% of the viewport height
    var ninetypercent = .97 * windowHeight;
    
    $(document).scroll(function(){
      
      var y = $(this).scrollTop();
      
      // add sticky class after document is scrolled past ninteypercent
      if( y > ninetypercent) {  
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    });
  // Call it on resize.
  }).resize();
  
});