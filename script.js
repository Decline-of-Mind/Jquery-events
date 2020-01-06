$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 

$(document).ready(function() {
    $(".bottom_button").on("mouseenter", function() {
        $("body").css("background-color", "black");
    });
    $(".bottom_button").on("mouseleave", function() {
        $("body").css("background-color", "grey");
    });
});

$(document).ready(function() {
    $("p").on("click", function() {
        $("p").css("color", "red");
    });
    $("h2").mouseenter(function() {
        $("h2").css("background-color", "light-blue")
    });
    $("h2").mouseenter(function() {
        $(this).css("font-size", "24px")
    });
});


