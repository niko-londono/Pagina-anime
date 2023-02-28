$(document).ready(function(){
    $('#search-input').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        $('#search-list a').filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });

        // if ($("#search-input").val() == "")
        // {
        //     $(".search-container").fadeOut(300);
        // }
        // else
        // {
        //     $(".search-container").fadIn(300);
        // }
    });
});