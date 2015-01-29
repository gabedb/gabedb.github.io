$(".navbar ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 500, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

$( window ).resize(function(){
    var cw = $('.sq-pic').width();
    $('.sq-pic').css({
        'height': cw + 'px'
    });
});

$('.ignore').css({'visibility':'hidden', 'width':'0%'});

$( document ).ready( function(){
    var cw = $('.sq-pic').width();
    $('.sq-pic').css({
        'height': cw + 'px'
    });
});