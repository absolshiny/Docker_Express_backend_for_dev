// The entry point of your application
// You import your routes.js here and if you use more routes you add them here
// so whatever routes you import here are going to go after the root directory
// Dont do logic here 

const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default to 3000

const routes = require('./routes/routes');

// Register the route handler
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});