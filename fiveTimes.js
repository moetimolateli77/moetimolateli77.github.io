/* Input: Integer numbers
 * Processing: Count from 1-12, then perform arithmetic operation
 * Output: Arithmetc operation and results
 */
function fiveTimes() {
	// Processing: Counting from 1 to 12, then perform arithmetic operation
	let output = "";
	for (let multiplier = 1; multiplier <= 12; multiplier++) {
		let results = 5 * multiplier;
		// Combining results of the first operation to the next
		output += "5 x" + " " + multiplier + " " + "=" + " " + results + "<br>";
	}
	//Output: Displaying arithmetic operation and results
	document.getElementById("output").innerHTML = output;
}
