/* Input: Temperature and Wind speed
 * Processing: Calculate Wind Chill
 * Output: Wind Chill
 */
function doInputOutput() {
	// Input: Accepting Temperature and Wind Speed from the user
	let temperature = parseFloat(document.getElementById("temp").value);
	let windSpeed = parseFloat(document.getElementById("wind").value);
	//Processing: Calling windChill function if the conditions true
	let output;
	if (temperature <= 50 && windSpeed >= 3) {
		let windchill = windChill(temperature, windSpeed);
		output = "Wind Chill Factor is" + " " + `<strong>${windchill.toFixed(2)}°F</strong>`;
	} else {
		output = "Temperature should be <= 50 and Wind Speed should be >= 3";
	}
	// Output: Display Wind Chill
	document.getElementById("output").innerHTML = output;
}
function windChill(tempF, speed) {
	//Processing: Calculating Wind Chill
	let t = tempF;
	let s = speed;
	return (
		35.74 +
		0.6215 * t -
		35.75 * Math.pow(s, 0.16) +
		0.4275 * t * Math.pow(s, 0.16)
	);
}
