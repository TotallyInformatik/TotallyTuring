// TODO make new algorithm to implement darkmode: -> keep algorithm with colors, but for each exception,make another algorithm 
// -> use classes! -> when updating to darkmode, add darkmode class to each element, that way, the styles will automatically change.


var svgPath;
window.isDarkmode;
var mainHeaderOffset = "-60px";

function registerSvgPath(svgpath) {
    svgPath = svgpath;
}

$(window).scroll(function() {
    if ($(window).scrollTop() > 0) { 
        $(".main-header").css("background-color", "rgb(245, 245, 245)");
        $(".main-header").css("top", mainHeaderOffset);
    } else {
        $(".main-header").css("background-color", "transparent");
        $(".main-header").css("top", "0px");
    }
});


$(function() {


    var lightModeColorOne = "rgb(255, 255, 255)";
    var darkModeColorOne = "rgb(30, 30, 30)";

    $(".dark-mode-wrapper").click(function() {
        
        if (!window.isDarkmode) {

            // color change
            $(window).unbind("scroll");
            $(window).scroll(function() {
                if ($(window).scrollTop() > 0) { 
                    $(".main-header").css("background-color", "rgb(50, 50, 50)");
                    $(".main-header").css("top", mainHeaderOffset);
                } else {
                    $(".main-header").css("background-color", "transparent");
                    $(".main-header").css("top", "0px");
                }
            });

            window.scrollTo(0, 0);

            $("body").css("background-color", darkModeColorOne)
            let allElements = $("body").find("*");

            allElements.each(function() {

                $(this).addClass("dark-mode");

            });
            
            window.isDarkmode = true;
            localStorage.setItem("darkmodePrefered", "true");

        } else {

            $(window).unbind("scroll");
            $(window).scroll(function() {
                if ($(window).scrollTop() > 0) { 
                    $(".main-header").css("background-color", "rgb(245, 245, 245)");
                    $(".main-header").css("top", mainHeaderOffset);
                } else {
                    $(".main-header").css("background-color", "transparent");
                    $(".main-header").css("top", "0px");
                }
            });

            window.scrollTo(0, 0);

            $("body").css("background-color", lightModeColorOne)
            let allElements = $("body").find("*");

            allElements.each(function() {

                $(this).removeClass("dark-mode");

            });

            window.isDarkmode = false;
            localStorage.setItem("darkmodePrefered", "false");

        }

    });

    var darkmodePrefered = localStorage.getItem("darkmodePrefered");

    if (darkmodePrefered === null) {
        window.isDarkmode = false;
    } else if (darkmodePrefered == "false") {
        window.isDarkmode = false;
    } else if (darkmodePrefered == "true") {
        $(".dark-mode-wrapper").trigger("click");
    }

});