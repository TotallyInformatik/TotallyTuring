$(function() {
    
    var cursorX;
    var startCursorX;
    var endCursorX;
    var currentProjectIndex = 0;
    var projectLength = 5;

    $(".project-gallery-nav-link").each(function() {
        var offset = $(this).attr("data-project-index") * 100;

        $(this).click(function() {
            currentProjectIndex = offset / 100;
            $(".project-items").css("left", -offset + "vw");
        });
    });

    $(".project-items").mousedown(function() {
        startCursorX = cursorX;
    });
    $(".project-items").mouseup(function() {
        endCursorX = cursorX;


        if (endCursorX > startCursorX && currentProjectIndex > 0) {

            var currentOffset = $(".project-items").css("left");
            currentOffset = currentOffset.replace("px", "");
            currentProjectIndex--;
            $(".project-items").css("left", -currentProjectIndex * 100 + "vw");

        }
        else if (endCursorX < startCursorX && currentProjectIndex < projectLength ) {

            var currentOffset = $(".project-items").css("left");
            currentOffset = currentOffset.replace("px", "");
            currentProjectIndex++;
            $(".project-items").css("left", -currentProjectIndex * 100 + "vw");

        }
    });
    $(document).mousemove(function(e) {
        cursorX = e.pageX;
    });

});