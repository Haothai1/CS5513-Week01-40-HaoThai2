// this is a single-line javascript comment

/* define a variable and place into it the http package (shared code) from node.js */

let myhttp = require('http');

// use dot notation in javascript to access an object and its methods (commands) and properties
// createServer() takes some arguments to make it provide a useful http sever
let myserver = myhttp.createServer(
  function( myrequest, myresponse ) {
    console.log( myrequest.url );

    let mytext;
    if ( myrequest.url === "/hey") {
      mytext = "Well hello there...folks";
    } else {
      mytext = "I don't know you!";
    }
    
    
    // writeHead() creates an http response header, including the status code (200 0k), the content type
    myresponse.writeHead( 200, { "Content-Type": "text/plain" } );

    myresponse.end( "Hello world! ");
  }
);

// ask http to start listening on a tcp port for incoming http requests

// listen() takes 2 args: 1: tcp port #, 2: string of the ip address to listen (0.0.0.0)
myserver.listen(8080, "0.0.0.0");

console.log("server has started");
