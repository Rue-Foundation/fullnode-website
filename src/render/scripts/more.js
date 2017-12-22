$( ".button-more" ).click(function() {
    $(this).parent().find(".desk-description").toggle();
    $(this).parent().toggleClass("active");
    if( $(this).text() == "LESS") {
      $(this).text("MORE");
    } else {
      $(this).text("LESS");
    }
});
