$(function() {

    $(".zoom-image").each(function() {

        if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

            $(this).click(function() {


                var imageZoomSection = $("<div class='imageZoom'></div>");
                var exitButton = $("<div class='exit'></div>");

                var url = $(this).attr("src");
                var zoomedImageWrapper = $("<div class='zoomed-image-wrapper'></div>");
                var zoomedImage = $("<div class='zoomed-image'></div>").css("background-image", "url(" + url + ")");



                $(exitButton).click(function() {

                    $(exitButton).animate({"top": "100px", "opacity": "0"}, 500);
                    $(imageZoomSection).animate({"top": "100vh", "opacity": "0"}, 500);
                    $(zoomedImageWrapper).animate({"top": "400px", "opacity": "0"}, 500);

                    setTimeout(function() {
                        $(".imageZoom").remove();
                    }, 500);
                });

                if (isDarkmode) {
                    exitButton.addClass("dark-mode");
                    imageZoomSection.addClass("dark-mode");
                }

                $("body").append(imageZoomSection);
                $(imageZoomSection).append(exitButton);
                $(zoomedImageWrapper).append(zoomedImage);
                $(imageZoomSection).append(zoomedImageWrapper);


                $(imageZoomSection).animate({"top": "0", "opacity": "1"}, 500);
                $(exitButton).animate({"top": "0", "opacity": "1"}, 500);
                $(zoomedImageWrapper).animate({"top": "100px", "opacity": "1"}, 500);



            });
        }

    });

});

