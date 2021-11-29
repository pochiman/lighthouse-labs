// Implement a small command line node app which should take a URL as a command-line argument 
// as well as a local file path and download the resource to the specified path.

const request = require('request');
const fs = require("fs");

const path = process.argv[3];
const domain = process.argv[2];

request(domain, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  fs.writeFile(`${path}`, body, function(error) {
    if (error) {
      console.log("error:", error);
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`);
    }
  });
});