var score = 0;
var checkOne = function(inputNumber){
  if( inputNumber.toUpperCase() === "HOT"){
    checkOne.score = 2;
    console.log(checkOne.score);
  }else if(inputNumber.toUpperCase() === "COLD"){
    checkOne.score = 1;
    console.log(checkOne.score);
  }else{
    alert("Whoops, it looks like we are missing something! Check question 1");
  }
}
var checkTwo = function(inputNumber){
  if( inputNumber.toUpperCase() === "HIGH"){
    checkTwo.score = 2;

    alert("high");
  }else if(inputNumber.toUpperCase() === "LOW"){
    alert("low");

    checkTwo.score = 1;
  }else{

    alert("Whoops, it looks like we are missing something! Check question2");
  }
}
var checkThree = function(inputNumber){
  if( inputNumber.toUpperCase() === "MORNING"){
    checkThree.score = 2;

    alert("morning");
  }else if(inputNumber.toUpperCase() === "NIGHT"){
    alert("night");

    checkThree.score = 1;
  }else{

    alert("Whoops, it looks like we are missing something! Check question 3");
  }
}
var checkFour = function(inputNumber){
  if( inputNumber.toUpperCase() === "DRY"){
    alert("dry");

    checkFour.score = 2;
  }else if(inputNumber.toUpperCase() === "WET"){
    alert("wet");

    checkFour.score = 1;
  }else{

    alert("Whoops, it looks like we are missing something! Check question 4");
  }
}
var checkFive = function(inputNumber){
  if( inputNumber.toUpperCase() === "HOT"){
    alert("hot");

    checkFive.score = 2;
  }else if(inputNumber.toUpperCase() === "COLD"){
    alert("cold");

    checkFive.score = 1;
  }else{

    alert("Whoops, it looks like we are missing something! Check question 5");
  }
}
var checkSix = function(inputNumber){
  if( inputNumber.toUpperCase() === "HOT"){
    alert("hot");

    checkSix.score = 2;
  }else if(inputNumber.toUpperCase() === "COLD"){
    alert("cold")

    checkSix.score = 1;
  }else{

    alert("Whoops, it looks like we are missing something! Check question 6");
  }
}

$(document).ready(function(){
  $("#button").click(function(event){
    console.log("button clicked");
    event.defaultPrevent;
    var inputOne = $("#questionOne").val();
    console.log(inputOne);
    var inputTwo = $("#questionTwo").val();
    console.log(inputTwo);
    var inputThree = $("#questionThree").val();
    console.log(inputThree);
    var inputFour = $("#questionFour").val();
    console.log(inputFour);
    var inputFive = $("#questionFive").val();
    console.log(inputFive)
    var inputSix = $("#questionSix").val();
    console.log(inputSix);
    checkOne(inputOne);
    checkTwo(inputTwo);
    checkThree(inputThree);
    checkFour(inputFour);
    checkFive(inputFive);
    checkSix(inputSix);
    var score = checkOne.score + checkTwo.score);
    vacation();


  });










  $(".click-me").click(function(){
    alert("getting ready to hide");
    $(this).hide();
    $("h1").hide();
    $("#form").show();
  });

});
