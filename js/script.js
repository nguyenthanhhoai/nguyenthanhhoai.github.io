$(document).ready(function() {
  var deviceWidth = $(document).width();
  var offsetTop;
  if (deviceWidth < 768) {
    offsetTop = 60;
  } else {
    offsetTop = 80;
  }

  /*$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('.navbar').addClass('bg-white');
    } else {
      $('.navbar').removeClass('bg-white');
    }
  });*/

  $('body').scrollspy({target: ".navbar", offset: offsetTop});
  
  $("#myNavbar a, a.scroll-down-btn").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - offsetTop
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  $('#myNavbar a').click(function() {
    var deviceWidth = $(document).width();
    if (deviceWidth < 768) {
      $('#navbar-button').click();
    }
  });

  $('#navbar-button').click(function(){
    $(this).toggleClass('open');
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