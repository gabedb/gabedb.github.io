var offset = 70;

//$('.navbar li a').click(function(event) {
//    event.preventDefault();
//    $($(this).attr('href'))[0].scrollIntoView();
//    scrollBy(0, -offset);
//});

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

$( document ).ready(function() {
    var div = 360 / 6;
    var radius = 150;
    var parentdiv = document.getElementById('circles');
    var offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2);  //assumes parent is square
    var offsetToChildCenter = 50;
    var totalOffset = offsetToParentCenter - offsetToChildCenter;
    for (var i = 1; i <= 6; ++i)
    {
    var childdiv = document.createElement('div');
    childdiv.className = 'div2';
    childdiv.style.position = 'absolute';
    var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
    var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
    childdiv.style.top = (y + totalOffset).toString() + "px";
    childdiv.style.left = (x + totalOffset).toString() + "px";
    parentdiv.appendChild(childdiv);
    }
});