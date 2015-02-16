var i, nIntervId;
var textArray = 
    ['"Do I want to be feared or loved? That’s a good question. I want both. I people to be afraid of how much they love me."',
    '"Abraham Lincoln once said that \"If you\'re a racist, I will attack you with the North,\" and these are the principles I carry with me in the workplace."',
     '"Toby has been cruisin\' for a bruisin\' for 12 years, and I am now his cruise director, and my name is Captain Bruisin\'. "'
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