//Slideshow configuration
$.vegas('slideshow', {
  delay:5000,
  backgrounds:[
   { src:'./img/dawn.jpg', fade:2000 },
   { src:'./img/nature.jpg', fade:2000 },
   { src:'./img/nature1.jpg', fade:2000 },
   { src:'./img/forest.jpg', fade:2000 },
   { src:'./img/anime-piano.jpg', fade:2000 }    
  ]
}); 

//Smooth Scrolling
   $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  }); 

//Mixitup : Grid
    $(function(){
    $('#Grid').mixitup();
      });
    
//Navbar
$(document).ready(function() {
        $('#nav').scrollToFixed();
  });