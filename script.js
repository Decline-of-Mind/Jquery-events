$(document).ready(function () {
    $("#stream1_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
    });
    $("#stream2_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
    });
    $("#stream3_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
    });

});

$(document).ready(function () {
    $(".bottom_button").on("mouseenter", function () {
        $("body").css("background-color", "black");
        $(this).fadeTo("fast", 0.5);
    });
    $(".bottom_button").on("mouseleave", function () {
        $("body").css("background-color", "grey");
        $(this).fadeTo("fast", 1);
    });
    $(".bottom_button").on("click", function(){
        $(this).prev("p").slideToggle("slow");
    });
    $(".card_image").on("click", function(){
        $(this).next().children("p").slideDown("slow");
    });
    $(".card_image").on("click", function(){
        $(this).next().toggleClass("pinkBackground");
    });
});

$(document).ready(function () {
    $("p").on("click", function () {
        $("p").css("color", "red");
    });
    $("p").click(function() {
        $(this).children("a").css("background-color", "yellow");
    })
    $("h2").mouseenter(function () {
        $("h2").css("background-color", "light-blue")
    });
    $("h2").mouseenter(function () {
        $(this).css("font-size", "24px")
    });
});


