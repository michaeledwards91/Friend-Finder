var friendsArray = require("../data/friends.js");

module.exports = function (app) {

	app.get("/api/friends", function(req, res) {
		res.json(friendsArray);
	});

	app.post("/api/friends", function(req, res) {
		console.log(req.body);

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
		  for (var t = 0; t < friendsArray[i].scores.length; t++) {
		    currentFriendDiff += absDiff(friendsArray[i].scores[t], req.body.scores[t]);
		  }
		  console.log("current friend diff: " + currentFriendDiff);
		  console.log("lowest diff: " + lowestDiff);
		  if (currentFriendDiff < lowestDiff && req.body.name != friendsArray[i].name) {
		    lowestDiff = currentFriendDiff;
		    bestMatch = friendsArray[i];
		  }
		  console.log("best match name:" + bestMatch.name);
		}
		//Send best match back
		res.send(bestMatch);
		
		friendsArray.push(req.body);
	});
}