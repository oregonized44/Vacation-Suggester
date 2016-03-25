$(document).ready(function(){
  $("#button").click(function(){
    alert("button clicked");

  });
  $(".click-me").click(function(){
    alert("getting ready to hide");
    $(this).hide();
    $("h1").hide();
    $("#form").show();

  });

});
