

$(document).ready(function(){








var inputSix = $("input:radio[name=coding]:checked").val();

  $("#button").click(function(){
    alert("button clicked");
    var inputOne = $("#questionOne").val();
    alert(inputOne);
    var inputTwo = $("#questionTwo").val();
    alert(inputTwo);
    var inputThree = $("#questionThree").val();
    alert(inputThree);
    var inputFour = $("#questionFour").val();
    alert(inputFour);
    var inputFive = $("#questionFive").val();
    alert(inputFive)
    var inputSix = $("#questionSix").val();
    alert(inputSix);

  });










  $(".click-me").click(function(){
    alert("getting ready to hide");
    $(this).hide();
    $("h1").hide();
    $("#form").show();
  });

});
