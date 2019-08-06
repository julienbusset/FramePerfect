$(document).ready(function () {
    var i = 0;
    var timerPrec = 0;
    
    $("#p2").append("0 ");

    setInterval(function(){
        $("#p1").html(i);
        i++;
    },
    17 // 60Hz à peu près
    );


    setInterval(function() {
        $("#p2").append((i - timerPrec) + " ");
        timerPrec = i;
    },
    1000
    );
});
