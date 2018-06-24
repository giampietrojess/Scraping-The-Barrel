$(document).ready(function(){


    // Click Listener for FORM SUBMISSION to DELETE a comment
    $('.delete-comment-button').on('click', function(){

        // Get _id of comment to be deleted
        var commentId = $(this).data("id");

        // URL root (so it works in eith Local Host for Heroku)
        var baseURL = window.location.origin;

        // AJAX Call to delete Comment
        $.ajax({
        url: baseURL + '/remove/comment/' + commentId,
        type: 'POST',
        })
        .done(function() {
        // Refresh the Window after the call is done
        location.reload();
        });
        
        // Prevent Default
        return false;

    });


    // Javascript for getting Current Date

    var newDate = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    newDate.setDate(newDate.getDate());

    //or insert it via javascript
    document.getElementById('displayDate').innerHTML = 
        days[newDate.getDay()] + ' ' + 
        (newDate.getMonth() + 1) + '/' + 
        newDate.getDate() + '/' + 
        newDate.getFullYear();

});