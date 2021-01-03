$(function() {

    $("p, h1, h2, li").each(function() {

        // check for availability of data-attribute "data-no-scroll"

        var attribute = $(this).attr("data-no-scroll");

        if (attribute !== "") {
            $(this).attr("data-scroll", "");
        }
    });

});