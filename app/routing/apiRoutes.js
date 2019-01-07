
var friends = require("../data/friends.js");

module.exports = function (app) {
    //get function to retreive information about the chosen friend
    app.get("/api/friends", function (req, res) {


        return res.json(friends);

    });

    
};