const express = require('express');

//importing data present in controller
const storeData = require('../controllers/data');

// connecting all the routes by express.Router();
const myRouter = express.Router();

//creating route and importing data.js and fetching information from controller
myRouter.route('/fetchData').get(storeData.dataController);

module.exports = myRouter;