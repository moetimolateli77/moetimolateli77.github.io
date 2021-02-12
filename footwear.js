/* Input: Weather from the menu
 * Processing: Reads weather and find appropriate footwear
 * Output: Recommends appropriate footwear to the user
 */
function footwear() {
	// Input: Accepting and reading user inputs.
	let weather = document.getElementById("dayWeather").value;
	// Processing: Reading weather and assigning appropriate footwear
	let footwear;
	if (weather == "hot") {
		footwear = "Sandals";
	} else if (weather == "rain") {
		footwear = "Galoshes";
	} else if (weather == "snow") {
		footwear = "Boots";
	} else {
		footwear = "Shoes";
	}
	// Output: Displays appropriate footwear for the day
	document.getElementById("output").innerHTML =
		"The day's footwear is" + " " + footwear;
}
