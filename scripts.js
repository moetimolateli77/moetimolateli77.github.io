/* Input: Mass in Pounds
 * Processing: Convert the Mass from Pounds to Kilograms
 * Output: The Mass converted to Kilograms
 */
function poundsTokilograms() {
	// Read mass in Pounds from the user.
	let text = document.getElementById("pounds").value;

	// Convert what the user typed from text into a number.
	let lbs = parseFloat(text);

	// Convert Pounds into Kilograms.
	let kg = lbs / 2.205;

	// Round the mass to 1 digit after the decimal.
	let digits = 1;
	let multiplier = Math.pow(10, digits);
	kg = Math.round(kg * multiplier) / multiplier;

	// Display the mass in Kilograms to the user.
	document.getElementById("output").innerHTML = kg + " " + "Kilograms";
}
