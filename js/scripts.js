$(document).ready(function() {
  $("#machine").submit(function(event) {
    const whisperInInput = $("input#whisperIn").val();

    $(".whisperIn").text(whisperInInput);

    $("#SHOUT").show();

    event.preventDefault();
  })
})