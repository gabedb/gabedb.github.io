/*global $ */

var offset = 53;
var toggled = false;

$(".image, .gal_overlay").click(function () {
//    alert('working');
    "use strict";
    $(".gal_overlay").toggleClass("active");
});

$(".navbar ul li a[href^='#']").on('click', function (e) {

    // prevent default anchor click behavior
    "use strict";
    e.preventDefault();
 
    // store hash
    var hash = this.hash;
 
    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top - offset
    }, 500, function () {
 
        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
    });

});


$(window).resize(function strict() {
    "use strict";
    var cw = $('.sq-pic').width();
    $('.sq-pic').css({
        'height': cw + 'px'
    });
    
    var h = $('.quad-2').height();
    $('.quad-1').css({
        'height': h + 'px'
    });
    $('.quad-1 img').css({
        'height': h + 'px'
    });
});

$('.ignore').css({'visibility': 'hidden', 'width': '0%'});

$(document).ready(function () {
//    var cw = $('.sq-pic').width();
//    $('.sq-pic').css({
//        'height': cw + 'px'
//    });
//    
//    var h = $('.quad-2').height();
//    $('.quad-1').css({
//        'height': h + 'px'
//    });
//    $('.quad-1 img').css({
//        'height': h + 'px'
//    });
//    var h = $('#gpic2').height();
//    $('#gpic1').css({
//        'height': h + 'px'
//    });
    
    $('#carousel-example-generic').fadeTo(2500, 1);
    $('.my-cap').fadeTo(3000, 1);
    
});

$(window).load(function () {
    "use strict";
    var cw = $('.sq-pic').width();
    $('.sq-pic').css({
        'height': cw + 'px'
    });
    
    var h = $('.quad-2').height();
    $('.quad-1').css({
        'height': h + 'px'
    });
    $('.quad-1 img').css({
        'height': h + 'px'
    });
    
//    var h2 = $('#gpic2').height();
//    $('#trouble').css({
//        'height': h2 + 'px'
//    });
//    $('#trouble img').css({
//        'height': h2 + 'px'
//    });
});