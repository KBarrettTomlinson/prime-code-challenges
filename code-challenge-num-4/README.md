# Code Challenge - Week 5 (Mongo Databases and Full Stack Logic - Debug)

## Overview

This Code Challenge is different from the rest. This time, you will need to debug an existing code base. You will need your
complete knowledge of the past 4 weeks to successfully navigate the problems that are in the code.

Keep in mind, often debugging is stressful for a couple reasons:

* The problems are not obvious, especially when you did not write the code.

* The solutions are often simple. Have confidence in your solutions and move onto the next problem.

* Debugging code bases that are not yours takes time. Take your time to work through each of the steps.


In addition to making the changes to the code base to correct the code, update this README.md file to explain your solutions.
Meaning, in your own words, explain the problem and why your solution fixes the problem.


## TODO

### Base Mode
[x] - Mongo does not seem to be connecting correctly.
    - the default localhost port is 27017. There was a typo in that port number.

[x] - The models have a conflict.
    - the model names must be unique, even though they are all saving to the same collection.

[x] - Index.html is not being properly served.
    - there was no app.get (or index.js route) for '/' which would send back index.html

[x] - Posting information does not seem to come up correctly on the req.body as intended.
    - bodyParser middleware was below the app.use for /listings which needs access to bodyParser

[x] - The information from the database is not being appended to the DOM.
    - after the ajax GET is made and a response is returned we need to call
    - appendListings(response); in order for the response information to be appended
    - to the DOM.


### Hard Mode
[ ] - All the information being appended on the DOM is not lining up together in their respective row.
    - Nothing to fix.

### Pro Mode
[x] - Not that you need to, but if you were to post this on Heroku, it would not work correctly.
    - app.set("port", (process.env.port || 5000));
    - process.end.port should be listed as process.env.PORT
    - trying to post this to heroku and it doesn't seem to completely solve the issue
    - because sever/public was in the .gitignore heroku didn't know where anything was.
    - Removed from gitignore and was able to sucessfully deploy. 
