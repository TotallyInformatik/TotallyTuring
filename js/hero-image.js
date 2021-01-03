$(function () {

    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        
        function parallax() {

            // event = event || window.event  
            // gets IE to work..... so that's why I intentionally left it out! yeart

            // btw. there is more code to support IE..... not going to implement it either. yeart.

            var x = event.pageX;
            var y = event.pageY;

            $(".hero-article").css("right", -x / 50);
            $(".hero-article").css("top", y / 50 + 50);

            $(".hero-section").css("right", -x / 100 + 50);
            $(".hero-section").css("top", y / 100 - 50);

        }

        // cool random other effect:
        $(document).mousemove(function() {
            parallax();
        });
        
    }

});