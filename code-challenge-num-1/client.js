var generateClickCounter = 0;

$(document).ready(function(){
  console.log("I'm Here For You.");


  appendDom();
  addEventListeners();

});

function appendDom(){
  console.log("I'm going to append your DOM");
  $(".container").append("<button id='generate'>Generate</button>");
  console.log("I made a generate button for you");


}

function addEventListeners(){

  //Event listener for Generate Button
  console.log("I'm here to listen");
  $(".container").on("click","#generate",function(){
    console.log("I've heard your request, and I have clicked the generate button");
    generateClickCounter ++;
    console.log("You've clicked generate "+ generateClickCounter +" number of times");
    $(".container").append("<div class='sub-container'></div>");
    var $el = $(".container").children().last();
    $el.append("<p class='times-clicked'>"+ generateClickCounter+"</p>");
    console.log ("this is the div you appended to container:", $el);
    $el.append("<button id='swap'>Swap</button>");
    console.log("I made a swap button for you inside sub-container");
    $el.append("<button id='delete'>Delete</button>");
    console.log("I made a delete button for you inside sub-container");
  });

  //Event listener for Swap Button
  $(".container").on("click","#swap",function(){
    console.log("good job buddy! you clicked on swap");
    $(this).parent().toggleClass("swap");
    console.log("a color should have changed");
  });

  //Event listener for Delete Button
  $(".container").on("click","#delete",function(){
    console.log("delete button clicked");
    $(this).parent().remove();
    console.log("say goodbye to a good div");
  });

}
