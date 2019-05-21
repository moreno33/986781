$(document).ready(function(){
    var isStart= false;
    var isLost= false;
    var isEnd= false;

    $("#start").click(function () {
        isStart= true;
        isLost= false;
        $(".boundary").removeClass("youlose");
        $("#status").text('Click the "S" to begin.');
    });

    $(".boundary").mouseover(function () {
        isLost= true;
        $(".boundary").addClass("youlose");
    });

    $("#end").click(function () {
        if(isStart){
            isEnd= true;
            if(isLost){
                $("#status").text("Sorry, you lost. :[");
            }else{
                $("#status").text("You win! :]")
            }
        }
    });

    $("#maze").mouseleave(function () {
        if(isStart && isEnd===false){
            isLost= true;
            isStart= false;
            $(".boundary").addClass("youlose");
            $("#status").text("Sorry, you lost. :[");
        }
    });
});