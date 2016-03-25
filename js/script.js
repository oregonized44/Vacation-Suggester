var score = 0;
var checkInputs = function(inputNumber){
  if( inputNumber.toUpperCase() === "HOT"){
    alert("hot");
  }else if(inputNumber.toUpperCase() === "Cold"){
    alert("cold")
  }else{
    alert("please fill in all missing");
  }



}

$(document).ready(function(){
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
    checkInputs(inputOne);



  });










  $(".click-me").click(function(){
    alert("getting ready to hide");
    $(this).hide();
    $("h1").hide();
    $("#form").show();
  });

});
