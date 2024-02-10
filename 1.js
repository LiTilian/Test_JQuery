$(document).ready(function(){
    $('#move-left').click(function(){
        $('#animated-box').animate({
            left: "-=100px"
        }, 500); 
    });

    $('#move-right').click(function(){
        $('#animated-box').animate({
            left: "+=100px"
        }, 500);
    });
});