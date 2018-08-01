
var friends = require("../data/friends.js");

module.exports = function (app) {
    //get function to retreive information about the chosen friend
    app.get("/api/friends", function (req, res) {


        return res.json(friends);

    });

    //put function to input your information entered as a possible new friend
    app.post("/api/friends", function (req, res) {

        var totalDifference = 0;

        var scoresArray = [];

        var userInfo = req.body;

        var winningName = "Nobody";
        var winningScore = 300;

        for (var i = 0; i < friends.length; i++) {

            //console.log(friends[i].name);
            totalDifference = 0

            for (var j = 0; j < 10; j++) {

                var questionDifference = Math.abs(parseInt(userInfo.scores[j]) - parseInt(friends[i].scores[j]));

                totalDifference += questionDifference
            }

            scoresArray.push(totalDifference)


            if (totalDifference < winningScore) {
                winningScore = totalDifference;
                winningName = friends[i].name;
            }



        }
        console.log(scoresArray[0] + "  " + scoresArray[1] + "  " + scoresArray[2])
        console.log(winningName)
        console.log(winningScore);


    });
};