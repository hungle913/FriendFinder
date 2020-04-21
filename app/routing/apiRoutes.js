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
        //create variable to store new pup
        var newPup = {
            name: req.body.name,
            photo: req.body.photo,
            scores:[]
        };

        //create new array to store new pup score
        var scoresArray = [];
        for (var i=0; i < req.body.scores.length; i++) {
            scores.Array.push(parseInt(req.body.scores[i]))
        }
        newPup.scores = scoresArray;

        

    });
};