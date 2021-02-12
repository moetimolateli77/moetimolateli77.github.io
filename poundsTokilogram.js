/* Input: Mass in Pounds
 * Processing: Convert the Mass from Pounds to Kilograms using lbs / 2.205
 * Output: The Mass converted to Kilograms
 */
function poundsTokilograms() {
	// Input: Read mass in Pounds from the user.
	let lbs = parseFloat(document.getElementById("pounds").value);

	// Processing: Convert Pounds into Kilograms.
	let kg = lbs / 2.205;

	// Processing: Round the mass to 1 digit after the decimal.
	let digits = 1;
	let multiplier = Math.pow(10, digits);
	kg = Math.round(kg * multiplier) / multiplier;

	// Output: Display the mass in Kilograms to the user.
	document.getElementById("output").innerHTML = kg + " " + "Kilograms"; 
}
