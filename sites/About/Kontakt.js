$(function() {

    $(".kontakt-form").submit(function(event) {
        /*
        event.preventDefault();

        
        var name = $(".nameInput").val();
        var email = $(".emailInput").val();
        var subject = $(".subjectInput").val();
        var message = $(".messageInput").val();

        var messageData = "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message;

        $.ajax({
            type: "POST",
            url: "contact.php",
            data: messageData,
            success: function() {
                $(".nameInput").val("");
                $(".emailInput").val("");
                $(".subjectInput").val("");
                $(".messageInput").val("");
                $(".feedback-message").css("color", "green");
                $(".feedback-message").text("E-mail sent!");
            },
            error: function() {
                $(".feedback-message").css("color", "indianred");
                $(".feedback-message").text("Something went wrong... Please try again.");
            }
        });
        */

        // oof

        event.preventDefault();
        
        var name = $(".nameInput").val();
        var subject = $(".subjectInput").val();
        var message = $(".messageInput").val();
        message = message.replace(new RegExp('\r?\n','g'), "%0D%0A");
        
        window.open(`mailto:totallyturing@gmail.com?subject=${name}: ${subject}&body=${message}`);
    });

})