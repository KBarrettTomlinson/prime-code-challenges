console.log( 'js' );
//doc ready
$( document ).ready( function(){
  console.log( 'JQ' );
  refreshJokes();
  eventListeners();
});//ends doc ready

//funcitons arranged alphabetically

function addJoke(object){
  //performs a ajax POST to /jokes
  console.log("inside addJoke");
  $.ajax({
    type: 'POST',
    url: '/jokes/add',
    data: object,
    success: function(res){
      console.log("I've returned from the POST to /jokes/add and I have this",res);
      displayJokes(res);
    }//ends success
  });//ends POST to jokes/add


}//ends addJoke

function displayJokes(displayArray){
  //appends joke array to the DOM with a for loop
  $('#outputDiv').empty();
  console.log("inside displayJokes");
  console.log("This is the array I've got to display", displayArray);
  for (var i = 0; i < displayArray.length; i++){
    $('#outputDiv').append('<span>Whose Joke: '+displayArray[i].whoseJoke+'<br><br>'+
      'Question: '+displayArray[i].jokeQuestion+'<br><br>'+'PunchLine: '+
      displayArray[i].punchLine+'</span><br><br><br><br>');
  }//ends append for loop
}//ends displayJokes

function eventListeners(){
  console.log("inside eventListeners");
  $( '#addJokeButton' ).on( 'click', function(){
    console.log( 'addJokeButton on click');
    var newJokeObject = {};
    newJokeObject.whoseJoke = $('#whoseJokeIn').val();
    newJokeObject.jokeQuestion = $('#questionIn').val();
    newJokeObject.punchLine = $('#punchlineIn').val();
    console.log("inside event listeners newJokeObject going to send",newJokeObject);
    addJoke(newJokeObject);
    $('#whoseJokeIn').val('');
    $('#questionIn').val('');
    $('#punchlineIn').val('');
  }); // end addJokeButton on click
}//ends eventListeners

function refreshJokes(){
  //performs a get request and receives array of jokes
  console.log("inside refreshJokes");
  $.ajax({
    type: 'GET',
    url: '/jokes',
    success: function(res){
      console.log("I've returned from the server. I have brought you this:", res);
      displayJokes(res);
    }//ends success
  });//ends get reques
}//ends refreshJokes
