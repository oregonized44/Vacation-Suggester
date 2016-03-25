var score = 0;
var checkOne = function(inputNumber){
  if( input.toUpperCase() === "HOT"){
    score++;
  }else if(inputNumber.toUpperCase() === "COLD"){
    score+=1;
    alert("cold");
  }else{
    alert("Whoops, it looks like we are missing something!");
  }
}
var checkOne = function(inputNumber){
  if( inputNumber.toUpperCase() === "HIGH"){
    score+=2;
    alert("high");
  }else if(inputNumber.toUpperCase() === "LOW"){
    alert("low");
    score+=1;
  }else{
    alert("Whoops, it looks like we are missing something!");
  }
}
var checkOne = function(inputNumber){
  if( inputNumber.toUpperCase() === "MORNING"){
    score+=2;
    alert("morning");
  }else if(inputNumber.toUpperCase() === "NIGHT"){
    alert("night");
    score+=1;
  }else{
    alert("Whoops, it looks like we are missing something!");
  }
}
var checkOne = function(inputNumber){
  if( inputNumber.toUpperCase() === "DRY"){
    alert("dry");
    score+=2;
  }else if(inputNumber.toUpperCase() === "WET"){
    alert("wet");
    score+=1;
  }else{
    alert("Whoops, it looks like we are missing something!");
  }
}
var checkOne = function(inputNumber){
  if( inputNumber.toUpperCase() === "HOT"){
    alert("hot");
    score+=2;
  }else if(inputNumber.toUpperCase() === "COLD"){
    alert("cold");
    score+=1;
  }else{
    alert("Whoops, it looks like we are missing something!");
  }
}
var checkOne = function(inputNumber){
  if( inputNumber.toUpperCase() === "HOT"){
    alert("hot");
    score+=2;
  }else if(inputNumber.toUpperCase() === "COLD"){
    alert("cold")
  }else{
    alert("Whoops, it looks like we are missing something!");
  }
}
var checkOne = function(inputNumber){
  if( inputNumber.toUpperCase() === "HOT"){
    alert("hot");
  }else if(inputNumber.toUpperCase() === "COLD"){
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
