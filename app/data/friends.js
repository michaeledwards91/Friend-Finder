var friendsArray = [
	{
		name: "Dog",
		photo: "http://www.memecreator.org/static/images/templates/49.jpg",
		scores: ["1", "5", "3", "4", "2", "2", "1", "4", "1", "5"]
	}
];

function Friend(name, photoURL) {
	this.name = name;
	this.photo = photoURL;
	this.scores = generateScores();
}

function generateScores() {
	var scores = [];
	for (var i = 0; i < 10; i++) {
		scores.push((Math.floor((Math.random() * 5)+1)).toString());
	}
	return scores;
}

//Populating friendsArray with dummy data using Friends constructor
friendsArray.push(new Friend("Toaster", "http://img4.wikia.nocookie.net/__cb20140131000949/disney/images/thumb/4/4d/Toaspic.png/130px-6%2C266%2C0%2C229-Toaspic.png"));
friendsArray.push(new Friend("Blanky", "http://img3.wikia.nocookie.net/__cb20130924031745/disney/images/thumb/7/78/Blanky_%28The_Brave_Little_Toaster%29.png/130px-132%2C749%2C0%2C545-Blanky_%28The_Brave_Little_Toaster%29.png"));
friendsArray.push(new Friend("Lampy", "http://img3.wikia.nocookie.net/__cb20130924032605/disney/images/thumb/5/5c/Lampy_%28The_Brave_Little_Toaster%29.png/130px-0%2C221%2C5%2C201-Lampy_%28The_Brave_Little_Toaster%29.png"));
friendsArray.push(new Friend("Air Conditioner", "http://img3.wikia.nocookie.net/__cb20140729231845/disney/images/thumb/0/04/Brave-little-toaster-disneyscreencaps.com-8438.jpg/130px-45%2C589%2C0%2C480-Brave-little-toaster-disneyscreencaps.com-8438.jpg"));
friendsArray.push(new Friend("Junkyard Cars", "http://img3.wikia.nocookie.net/__cb20091224022501/disney/images/thumb/5/54/JunkyardCars.jpg/130px-163%2C1019%2C0%2C756-JunkyardCars.jpg"));

module.exports = friendsArray;