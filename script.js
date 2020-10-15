$(document).ready(() => {

    $("#rm-generator-demo-nav").on("click", () => {
        $(".demo-window").css("display", "block");
        $(".demo-content").css("display", "block").html("<iframe width='768' height='432' src='https://www.youtube.com/embed/J83TmIJUB-g' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>'>");
    })

    $("#rm-generator-demo-code").on("click", () => {
        $(".demo-window").css("display", "block")
        $(".demo-content").css("display", "block").html("<iframe width='768' height='432' src='https://www.youtube.com/embed/wW4C2hOhweg' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>'");
    })

    $("#tp-generator-demo-nav").on("click", () => {
        $(".demo-window").css("display", "block")
        $(".demo-content").css("display", "block").html("<iframe width='768' height='432' src='https://www.youtube.com/embed/U77DcU5zm8g' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>'");
    })

    $("#tp-generator-demo-code").on("click", () => {
        $(".demo-window").css("display", "block")
        $(".demo-content").css("display", "block").html("<iframe width='768' height='432' src='https://www.youtube.com/embed/Rnv2ZL6jPqs' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>'");
    })

    $("#calendar-demo-nav").on("click", () => {
        $(".demo-window").css("display", "block");
        $(".demo-content").css("display", "block").html("<img src='assets/demo-gifs/calendar-demo.gif' height='100%' width='100%'>");
    })

    $("#weather-app-nav").on("click", () => {
        $(".demo-window").css("display", "block");
        $(".demo-content").css("display", "block").html("<img src='assets/demo-gifs/weather-app-demo.gif' height='100%' width='100%'>");
    })

    $("#date-night-at-home-nav").on("click", () => {
        $(".demo-window").css("display", "block");
        $(".demo-content").css("display", "block").html("<img src='assets/demo-gifs/operation-date-night-navigation.gif' height='100%' width='100%'>");
    })

    $("#date-night-at-home-restaurant").on("click", () => {
        $(".demo-window").css("display", "block");
        $(".demo-content").css("display", "block").html("<img src='assets/demo-gifs/operation-date-night-restaurant.gif' height='100%' width='100%'>");
    })

    $("#date-night-at-home-movie").on("click", () => {
        $(".demo-window").css("display", "block");
        $(".demo-content").css("display", "block").html("<img src='assets/demo-gifs/operation-date-night-movie.gif' height='100%' width='100%'>");
    })

    $(".fa-window-close").on("click", () => {
        $(".demo-window").css("display", "none");
    })

    $("#burger-nav").on("click", () => {
        $(".demo-window").css("display", "block");
        $(".demo-content").css("display", "block").html("<img src='assets/demo-gifs/burger-demo.gif' height='100%' width='100%'>");
    })

})