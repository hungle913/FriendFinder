//require path package
var path = require("path");

//loading data of friends array
var friendsData = require("../data/friends");

//Routing
module.exports = function(app) {
    //api get request
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    //Add a new pup friend
    app.post("/api/friends", function(req, res) {
        var userInput = req.body
        // console.log("User input = " + JSON.stringify(userInput));
    })

}