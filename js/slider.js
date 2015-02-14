var i, nIntervId;
i=0;
 
function beginCycle() {
    console.log("we did it?");
    nIntervId = setInterval(cyclePics, 5000);
}
 
function cyclePics() {
    if(i===0){
        $(".featurette-image").fadeOut(function() {
            $(this).attr("src","../asses/img/Bryan.jpg").fadeIn("slow");
        });
    }
    else if(i===1){
        $(".featurette-image").fadeOut(function() {
            $(this).attr("src","../asses/img/Josh.jpg").fadeIn("slow");
        });
    }
    else{
        $(".featurette-image").fadeOut(function() {
            $(this).attr("src","../asses/img/Billy.jpg").fadeIn("slow");
        });
    }
    i++;
    i = i % 3;
}
 
function stopCycling() {
    clearInterval(nIntervId);
}

$(window).load(beginCycle);