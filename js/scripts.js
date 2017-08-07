var gallonsToLiters = function(gallons) {
	return gallons * 3.785411784;
};

var litersToGallons = function(liters) {
	return liters / 3.785411784;
};

var liters = parseInt(prompt("How many liters?"));
alert("That is " + litersToGallons(liters) + " gallons.");

var gallons = parseInt(prompt("How many gallons?"));
alert("That is " + gallonsToLiters(gallons) + " liters.");
