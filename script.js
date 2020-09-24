$(document).ready(() => {

    $("#pw-generator-demo-nav").on("click", () => {
        $(".demo-window").css("display", "block");
        $(".demo-content").css("display", "block").html("<img src='assets/demo-gifs/password-generator-navigation.gif' height='100%' width='100%'>"
        );
    })

    $("#pw-generator-demo-err").on("click", () => {
        $(".demo-window").css("display", "block")
        $(".demo-content").css("display", "block").html("<img src='assets/demo-gifs/password-generator-errors.gif' height='100%' width='100%'>"
        );
       
    })
    
    $("#calendar-demo-nav").on("click", () => {
        $(".demo-window").css("display", "block");
        $(".demo-content").css("display", "block").html("<img src='assets/demo-gifs/calendar-demo.gif' height='100%' width='100%'>"
        );
    })

    $("#weather-app-nav").on("click", () => {
        $(".demo-window").css("display", "block");
        $(".demo-content").css("display", "block").html("<img src='assets/demo-gifs/weather-app-demo.gif' height='100%' width='100%'>"
        );
    })

    $("#date-night-at-home-nav").on("click", () => {
        $(".demo-window").css("display", "block");
        $(".demo-content").css("display", "block").html("<img src='assets/demo-gifs/operation-date-night-navigation.gif' height='100%' width='100%'>"
        );
    })

    $("#date-night-at-home-restaurant").on("click", () => {
        $(".demo-window").css("display", "block");
        $(".demo-content").css("display", "block").html("<img src='assets/demo-gifs/operation-date-night-restaurant.gif' height='100%' width='100%'>"
        );
    })

    $("#date-night-at-home-movie").on("click", () => {
        $(".demo-window").css("display", "block");
        $(".demo-content").css("display", "block").html("<img src='assets/demo-gifs/operation-date-night-movie.gif' height='100%' width='100%'>"
        );
    })

    $(".fa-window-close").on("click", () => {
        $(".demo-window").css("display", "none");
    })
    $("#burger-nav").on("click", () => {
        $(".demo-window").css("display", "block");
        $(".demo-content").css("display", "block").html("<img src='assets/demo-gifs/burger-demo.gif' height='100%' width='100%'>"
        );
    })

})