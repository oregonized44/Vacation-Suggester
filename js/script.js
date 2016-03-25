//////////////////////////////////////////////////////////////////////////////
//CHECK ONE///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////
//CHECK TWO///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

var checkTwo = function(inputNumber){
  if( inputNumber.toUpperCase() === "HIGH"){
    checkTwo.score = 2;
  }else if(inputNumber.toUpperCase() === "LOW"){
    checkTwo.score = 1;
  }else{
    alert("Whoops, it looks like we are missing something! Check question2");
  }
}

//////////////////////////////////////////////////////////////////////////////
//CHECK THREE/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

var checkThree = function(inputNumber){
  if( inputNumber.toUpperCase() === "MORNING"){
    checkThree.score = 2;
  }else if(inputNumber.toUpperCase() === "NIGHT"){
    checkThree.score = 1;
  }else{
    alert("Whoops, it looks like we are missing something! Check question 3");
  }
}

//////////////////////////////////////////////////////////////////////////////
//CHECK FOUR//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

var checkFour = function(inputNumber){
  if( inputNumber.toUpperCase() === "DRY"){
    checkFour.score = 2;
  }else if(inputNumber.toUpperCase() === "WET"){
    checkFour.score = 1;
  }else{
    alert("Whoops, it looks like we are missing something! Check question 4");
  }
}

//////////////////////////////////////////////////////////////////////////////
//CHECK FIVE//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

var checkFive = function(inputNumber){
  if( inputNumber.toUpperCase() === "HOT"){
    checkFive.score = 2;
  }else if(inputNumber.toUpperCase() === "COLD"){
    checkFive.score = 1;
  }else{
    alert("Whoops, it looks like we are missing something! Check question 5");
  }
}

//////////////////////////////////////////////////////////////////////////////
//CHECK SIX////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

var checkSix = function(inputNumber){
  if( inputNumber.toUpperCase() === "SUMMER" || inputNumber.toUpperCase() === "SPRING"){
    alert("hot");
    checkSix.score = 2;
  }else if(inputNumber.toUpperCase() === "FALL" || inputNumber.toUpperCase() === "WINTER"){
    checkSix.score = 1;
  }else{
    alert("Whoops, it looks like we are missing something! Check question 6");
  }
}

//////////////////////////////////////////////////////////////////////////////
//EVENT LISTENERS/////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
  $("#button").click(function(event){

    event.defaultPrevent;
    var inputOne = $("#questionOne").val();
    var inputTwo = $("#questionTwo").val();
    var inputThree = $("#questionThree").val();
    var inputFour = $("#questionFour").val();
    var inputFive = $("#questionFive").val();
    var inputSix = $("#questionSix").val();
    checkOne(inputOne);
    checkTwo(inputTwo);
    checkThree(inputThree);
    checkFour(inputFour);
    checkFive(inputFive);
    checkSix(inputSix);
    var score = checkOne.score + checkTwo.score + checkThree.score + checkFour.score + checkFive.score + checkSix.score;
    alert(score);
    switch(score){
      case 6:
      alert("winner 6");
      $(document).
      break;
      case 7: alert("winner 7");
      break;
      case 8: alert("winner8");
      break;
      case 9: alert("winner 9");
      break;
      case 10: alert("winner10");
      break;
      case 11: alert("winner 11");
      break;
      case 12: alert("winner 12");
      break;
    }



  });

  $(".letsTravel").click(function(){


  });









  $(".click-me").click(function(){
    $(this).hide();
    $("h1").hide();
    $("#form").show();
  });

});
