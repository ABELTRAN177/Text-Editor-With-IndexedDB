// Import the 'path' module from Node.js. This module provides utilities for working with file and directory paths.
const path = require('path');

// Export a function that takes an Express application as an argument.
module.exports = (app) =>

  // Define a route handler for GET requests to the root URL ('/').
  app.get('/', (req, res) =>

    // Send the 'index.html' file located in the 'client/dist' directory as the response.
    // '__dirname' is a Node.js global variable that gets the directory name of the current module.
    // 'path.join' is used to join the given path segments together using the platform specific separator as a delimiter.
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );