$(document).ready(function() {
  // $('.navigation').affix({offset: {top: 150} });

  $('body').scrollspy({target: ".navbar", offset: 80});
  
  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a, a.scroll-down-btn").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 80
      }, 800, function(){
      // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  var mixer = mixitup('.portfolio .items-fr', {
    selectors: {
      target: '.item'
    },
    "animation": {
      "duration": 618,
      "nudge": true,
      "reverseOut": false,
      "effects": "fade scale(0.53)"
    }
  });

  new WOW().init();
});