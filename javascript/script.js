$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
    $(".nav div.logo a").toggleClass("active");
    $(".nav").toggleClass("active");
    $(".headerText").toggleClass("hidden");
    $(".arrow-down").toggleClass("hidden");
});

$('#return-top-btn').click(function () {
    console.log("click");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});