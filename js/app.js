$( document ).ready(function() {
    var width = $(window).width();

    window.responsive = function responsive() {
        //get the width of the window
        var width = $(window).width();

        if (width > 500 && width < 900) 
    {
        $(".item-a" ).css("background-color","yellow");
        $( ".item-b" ).css("background-color","green");
        $( ".item-c" ).css("background-color","purple");
        $( ".item-d" ).css("background-color","red");
        $( ".item-e" ).css("background-color","gray");
        $( ".item-f" ).css("background-color","orange");
        $( ".item-g" ).css("background-color","pink");
        $( ".item-h" ).css("background-color","skyblue");
        $( ".item-i" ).css("background-color","blue");
        alert("colors changed using jquery");

    }
}
});
$(window).on('orientationchange',function(){responsive();});
