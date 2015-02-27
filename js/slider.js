var i, nIntervId;
var textArray = 
    ['"Praesent blandit est massa, a vestibulum eros aliquet auctor. Mauris in vestibulum magna. Sed vitae risus interdum, commodo nisi at, efficitur nibh."',
    '"Quisque placerat ligula et ipsum euismod elementum. Phasellus consectetur iaculis leo, eu commodo tellus."',
     '"Maecenas eget tortor ultricies, aliquet tellus vel, posuere elit. Fusce interdum placerat lectus, a semper lectus eleifend sit amet."'
    ]
i=0;
 
function beginCycle() {
    nIntervId = setInterval(cyclePics, 5000);
}
 
function cyclePics() {
    if(i===0){
        $(".featurette-image").fadeOut(function() {
            $(this).attr("src","../asses/img/Bryan.jpg").fadeIn("slow");
        });
        $(".lead").fadeOut(function() {
            $(this).text(textArray[0]).fadeIn("slow");
        });
    }
    else if(i===1){
        $(".featurette-image").fadeOut(function() {
            $(this).attr("src","../asses/img/Josh.jpg").fadeIn("slow");
        });
        $(".lead").fadeOut(function() {
            $(this).text(textArray[1]).fadeIn("slow");
        });
    }
    else{
        $(".featurette-image").fadeOut(function() {
            $(this).attr("src","../asses/img/Billy.jpg").fadeIn("slow");
        });
        $(".lead").fadeOut(function() {
            $(this).text(textArray[2]).fadeIn("slow");
        });
    }
    i++;
    i = i % 3;
}
 
function stopCycling() {
    clearInterval(nIntervId);
    window.setTimeout(beginCycle, 5000);
}

$(".featurette-image").on("click", stopCycling);


$(window).load(beginCycle);