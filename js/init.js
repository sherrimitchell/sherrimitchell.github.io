(function($){
  $(function(){

// parallax
    $('.button-collapse').sideNav();
    $('.parallax').parallax();

// scrollspy
$('.scrollspy').scrollSpy();

// collapsible pop-out
$(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });

// slider
	$('.slider').slider({full_width: true});
		// Turn off indicators
  
 


  }); // end of document ready
})(jQuery); // end of jQuery name space
