//requires
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );

//globals
// create 'urlEncodedParser' in case we want to inject it for post calls:
var urlEncodedParser = bodyParser.urlencoded( { extended: true } );

// use bodyParser.urlencoded throughout the app with this:
//uses
app.use( express.static( 'server/public/' ) );
app.use( bodyParser.urlencoded( { extended: false } ) );

app.set("port", (process.env.PORT || 5000));


//exisiting joke array of joke objects
jokes = [
  {
    whoseJoke: "Danny",
    jokeQuestion: "Why do scuba divers fall backwards out of boats?",
    punchLine: "If they fell forwards they’d still be in the boat"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Twofish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "I went to the zoo the other day, it had one dog,",
    punchLine: "It was a shih tzu."
  }
];

//GETS
app.get( '/', function( req, res ){
  // base url
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'server/public/views/index.html' ) );
}); // end base url

app.get('/jokes',function( req, res ){
  console.log( 'did somebody ask for some jokes?' );
  res.send(jokes);
});//end /jokes get


//POSTS
app.post( '/jokes/add', function( req, res){
  console.log( "I've got a new joke for you!", req.body);
  jokes.push(req.body);
  res.send(jokes);
});// end /jokes/add get


app.listen( app.get("port"), function(){
  console.log( 'server up on: ', app.get("port") );
}); // end spin up server
