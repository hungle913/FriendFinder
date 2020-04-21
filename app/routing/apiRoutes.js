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
        //variable to capture user input
        var userInput = req.body
        // console.log("User input = " + JSON.stringify(userInput));

        var userScores = userInput.scores;
        // console.log("User Scores = " + userScores);

        //variables for matches
        var matchName = '';
        var matchImage = '';
        var difference = [];
        //For loop to go through all friends in list
        for (var i = 0; i <friendsData.length; i++) {
            //calculate diff for each question
            var diff = 0;
            for (var h = 0; h < userScores.length; h++) {
                diff += Math.abs(friendsData[i].scores[h] - userScores[h]);     
           }
           console.log("Difference = " + diff);
           difference.push(diff);
        //    console.log("Difference Array = " + difference);

        };
        console.log("Difference Array = " + difference);
        var match = Math.min(...difference);
        console.log("Closest Match is = " + match);

    });

};