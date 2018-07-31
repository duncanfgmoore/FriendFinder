
var friends = require("../data/friends.js");

module.exports = function(app) {
//get function to retreive information about the chosen friend
app.get("/api/friends", function(req, res) {
    
   
   return res.json(friends);
    
  });



  //put function to input your information entered as a possible new friend
app.post("/api/friends", function(req, res) {
    
var totalDifference = 0;

var yourMatch = {};

//for loop to go through all the friends in the array 
for (var i = 0; i < friends.length; i++) {

    console.log(friends[i]);
}
//for loop to go through each one of the answers and compare them
    for (var i = 0; i < scores.length; i++) {

        var questionDifference = Math.ad(yourInfo.score[i] - friends[i].scores[i]);

        totalDifference = totalDifference + questionDifference


    }

  });
};