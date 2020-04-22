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
        var difference = [];
        //For loop to go through all friends in list
        for (var i = 0; i <friendsData.length; i++) {
            //calculate diff for each question
            var diff = 0;
            for (var h = 0; h < userScores.length; h++) {
                diff += Math.abs(friendsData[i].scores[h] - userScores[h]);     
            }
            // console.log("Difference = " + diff);
            difference.push(diff);
            // console.log("Difference Array = " + difference);
        };

        // Determine best match using position of best match in friendsData array
        var bestMatchPosition = 0;
        for (var i = 1; i < difference.length; i++) {
            //Lower number in comparison is better match
            if(difference[i] < difference[bestMatchPosition]){
                bestMatchPosition = i;
            }
        }

        // IF 2 friends have same comparison, then newest entry is chosen
        bestPupMatch = friendsData[bestMatchPosition];
        // console.log("Best Pup is = " + bestPupMatch.name);
        // console.log("Best Pup is = " + bestPupMatch.photo);

            // Replay with JSON object of best Pup match
            // res.json(bestPupMatch)

		// Send appropriate response
        res.json(bestPupMatch);
        
        // Add new user
		friendsData.push(userInput);

    });
};