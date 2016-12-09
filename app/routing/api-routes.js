var friendsArray = require("../data/friends.js");

module.exports = function (app) {

	app.get("/api/friends", function(req, res) {
		res.json(friendsArray);
	});

	app.post("/api/friends", function(req, res) {
		
		var lowestDiff = 1000;
		var bestMatch = friendsArray[0];
		//Function to calculate absolute difference of 2 numbers for comparing scores array indexes
		function absDiff(num1, num2) {
		  if (num1 > num2) {
		    return num1 - num2;
		  } else if (num2 > num1) {
		    return num2 - num1;
		  } else {
		    return 0;
		  }
		}
		//For each item in friends array, i want to compare req.body's scores array with current friend's score's array
		for (var i = 0; i < friendsArray.length; i++) {
		  var currentFriendDiff = 0;
		  //On current friend, compare each score to req.body's scores, add diff to currentFriendDiff
		  for (var t = 0; t < friendsArray[i].scores.length; t++) {
		    currentFriendDiff += absDiff(friendsArray[i].scores[t], req.body.scores[t]);
		  }
		  /*If current friend's diff is lower than the lowest diff found so far, and current friend's name is not req.body's name (to avoid matching with self on multiple clicks, but very bad solution in large scale. In large scale would need to identify by something other than name), current friend becomes best match. */
		  if (currentFriendDiff < lowestDiff && req.body.name != friendsArray[i].name) {
		    lowestDiff = currentFriendDiff;
		    bestMatch = friendsArray[i];
		  }

		}
		//Send best match back
		res.send(bestMatch);
		//Add new friend to API
		friendsArray.push(req.body);
	});
}