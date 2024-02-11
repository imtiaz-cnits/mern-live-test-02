// Question : Write a function named createServer that creates a simple HTTP server using the built-in http module.
// The server should listen on port 5000 and respond to all requests with a plain text response of "Hello This is Node Js Server!".
// Simple server config

const http = require("http");

const createServer = http.createServer((req, res) => {
  res.end("Hello This is Node Js Server!");
});

createServer.listen(5000);
