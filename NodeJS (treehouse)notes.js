  node -v //this is used in cmd to check the Node.js version installed
 node // is used to write  Node.js code in the cmd prompt
 /* below is a bug in cmd i must!!! fix asap involving node.js modules.
  if i dont fix this i "will never" be able to write "Node.JS" code */

  node app.js// modules won't work properly


// first application in node.js is below(very simple)

  console.log("hello world");
  console.error(oops something did not go right.);// used to log out error messages
  console.dir({name: "kyle mullikin" age: 18});// prints out the values, and the keys in human readable code

                              /* an API is a messenger that  takes request's, and tells something
                               to a system and then you get a response back */

// below are the native objects
// string
//array
//date
//math

// below are Host Objects

// window
// document
// history
// XMLHttpRequest


// below is "MY FIRST COMMAND LINE APPLICATION" :
// function is used to print "message" to the console
function printMessage(username , badgecount , points) {
 const message = ${username} has ${badgecount} total badge(s) and  ${points} points in javascript;
 console.log(message);
}
printMessage{"kylechris088", 120, 20000000};

// the 4 P's of Problem solving is below as well:
// Prepare : diagnose issue, propose a solution
// Plan : this is where i plan the solution(a common way is to write comments in my js file)

    // below is how to plan a project:




// Perform : write the code needed
                                                        /* STUDY "MAKING A GET REQUEST W/HTTPS" until
                                                        i as understand it clearly/ as well as possible w/in
                                                        a short time period of "1 week?"*/
// Perfect : improve it ("if needed")


// BELOW IS MY "MAKING a GET REQUEST with https"
// below is "
    // as well as "MAKING a GET Request with https" : this is the main part/ takes up most of my code
    const https = require('https'); // require https module
    // not sure if above const is needed, or correct
const username = "kylechris088";
// function is used to print "message" to the console
function printMessage(username, badgecount, points) {// or whatever i choose
 const message = ${username} has ${badgecount} total badges(s) and  ${points} points in Javascript;
  //or whatever i choose instead of "badgecount, or username, or points" can be above based on the web app i want
 console.log(message);
}
//now i must connect to the "url"/ time to look at the "documentation"
// what is my "url"?
    // my response :
const.request = https.get(//https://teamtreehouse.com/kylemullikin.json , response => {
                              //the code below could be "INCORRECT"?



        // below is "Handling the Error event in Nodejs":


        const https = require('https'); // require https module
        // not sure if above const is needed, or correct
    const username = "kylechris088";
    // function is used to print "message" to the console
    function printMessage(username, badgecount, points) {// or whatever i choose
     const message = ${userName} has ${badgeCount} total badges(s) and  ${points} points in Javascript;
      //or whatever i choose instead of "badgecount, or username, or points" can be above based on the web app i want
     console.log(message);
    }
    //now i must connect to the "url"/ time to look at the "documentation"
    // what is my "url"?
        // my response :
    const.request = https.get(https://www.teamtreehouse.com/library/making-a-get-request-with-https , response => {
    // the above "URL may be INCORRECT"? but i could be mistaken.
    let body "";
    //read the data
    response.on('data' , data => {
      body += data.toString();
    });

    response.on('and' , ()=> {
      //parse the data
      const profile = JSON.parse(body);
      //print the data
      printMessage(userName, profile.badges.length, profile.points.Javascript);
    });
  });
  request.on(' error' , error => console.error('problem with request: $ { error.message)'))}
        const users = process.argv.slice(2);
        users.forEach(getProfile);
                                  //the code below could be "INCORRECT"? i personally feel it is wrong!!/ " console.dir(response);"
        console.dir(response);
        // read the data
        //parse the data
        //print the data

      });// might need to "backspace the Semicolon from the left side"? i doubt that though?!



    console.dir(response);
    // read the data
    //parse the data
    //print the data

      });

// below is "GETTING THE RESPONSE BODY" :
