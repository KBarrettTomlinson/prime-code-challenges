var express = require("express");
var router = express.Router();
var pg = require("pg");

var config = {
  database: "chi", // name of your database
  host: "localhost", //where is your database?
  port: 5432, // port for the database
  max: 10, // how many connections at one time
  idleTimeoutMillis: 30000 //30 seconds to connect
};

var pool = new pg.Pool(config);


// GET /treats
  router.get('/', function (req, res) {
    pool.connect(function (err, client, done) {
      if (err) {
        console.log('Error connecting to the DB', err);
        res.sendStatus(500);
        done();
        return;
      }//if error
      else{
        client.query( 'SELECT * FROM "treats";',
                      function( queryError , result){
                        done();
                        if( queryError ){
                          console.log("Error making query.");
                          res.sendStatus(500);
                        }//if query error
                        else{
                          res.send(result.rows);
                        }//if no query error
                      });//ends SELECT query
      }//if no error
    });//ends pool.connect
  });//ends router.get

/** ---- YOUR CODE BELOW ---- **/

// POST /treats
  router.post('/', function (req, res) {
    //retreive the data from the object
    var name = req.body.name;
    var description = req.body.description;
    var pic = req.body.pic;


    pool.connect(function (err, client, done) {
      if (err) {
        console.log('Error connecting to the DB', err);
        res.sendStatus(500);
        done();
        return;
      }//if error
      else{
        client.query( 'INSERT INTO "treats" ("name", "description", "pic")'+
                      'VALUES ($1,$2,$3);',
                      [name, description, pic],
                      function( queryError , result){
                        done();
                        if( queryError ){
                          console.log("Error making query.");
                          res.sendStatus(500);
                        }//if query error
                        else{
                          res.sendStatus(201);
                        }//if no query error
                      });//ends SELECT query
      }//if no error
    });//ends pool.connect
  });//ends router.post


// PUT /treats/<id>

  router.put('/:valOne', function (req, res) {
    //retreive the data from the object
    var id = req.params.valOne;
    var name = req.body.name;
    var description = req.body.description;
    var pic = req.body.pic;
    console.log("inside put", id, name, description, pic);

    pool.connect(function (err, client, done) {
      if (err) {
        console.log('Error connecting to the DB', err);
        res.sendStatus(500);
        done();
        return;
      }//if error
      else{
        client.query( 'UPDATE "treats"'+
                      'SET "name" = $1, "description" = $2, "pic" = $3'+
                      'WHERE "id" = $4;',
                      [name, description, pic, id],
                      function( queryError , result){
                        done();
                        if( queryError ){
                          console.log("Error making query.");
                          res.sendStatus(500);
                        }//if query error
                        else{
                          res.sendStatus(201);
                        }//if no query error
                      });//ends SELECT query
      }//if no error
    });//ends pool.connect
  });//ends router.put

// DELETE /treats/<id>
  router.delete('/:valOne', function (req, res) {
    //retreive the data from the object
    var id = req.params.valOne;
    console.log("inside delete", id);

    pool.connect(function (err, client, done) {
      if (err) {
        console.log('Error connecting to the DB', err);
        res.sendStatus(500);
        done();
        return;
      }//if error
      else{
        client.query( 'DELETE FROM "treats"'+
                      'WHERE "id" = $1;',
                      [id],
                      function( queryError , result){
                        done();
                        if( queryError ){
                          console.log("Error making query.");
                          res.sendStatus(500);
                        }//if query error
                        else{
                          res.sendStatus(201);
                        }//if no query error
                      });//ends SELECT query
      }//if no error
    });//ends pool.connect
  });//ends router.delete


/** ---- DO NOT MODIFY BELOW ---- **/
module.exports = router;
