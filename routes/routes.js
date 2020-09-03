// Dependencies START
// *********************************************************************************
const express = require("express");
const router = express.Router();
const path = require("path");
var db = require("../models");
const projects = require("../models/project");
// *********************************************************************************
// Dependencies END

// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************


// Routes START
router.get("/", function(req, res) {
  // Query posts for all posts
  db.Project.findAll({
    // Add order conditions here....
    order: [['id', 'DESC']],
  }).then(function (projectData) {
    console.log(projectData)
    // create handle bars obj to be rendered
    var xPrs_HB_DATA = {
      entireRequest: req,
      requestBody: req.body,
      Project: projectData,
    }
    res.render("index", xPrs_HB_DATA)
  
  });


});



module.exports = router;