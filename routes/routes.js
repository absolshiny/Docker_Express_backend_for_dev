//This file can also be named index.js if you want to automatically load it.
// Is also recomended to name this with the name of your current app (movies.js if is an app that retrieves movie sugestions)
// If you are starting a new project probably dont need to this but you can also crate
//      another folder and call it v1 so you can use two different version at the same time,
//      this makes the project more complex so if you are just starting naming it index.js is enough.
// This file is required honestly is not difficult to use it and it adds more professionalism to your
//      project.


const express = require('express');
const controller = require('../controllers/controller'); // Import controller

const router = express.Router();

// Define a route using the controller function
router.get('/', controller.helloWorld);

module.exports = router;
