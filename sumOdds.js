/* Input: Any Number as integer
 * Processing: Compute odd number and sum them up
 * Output: Sum of odds computed
 */
function sumOdds() {
	// Input: Accepting number as integer
	let intNumber = parseInt(document.getElementById("integerNumber").value);
	// Processing: Counting from 1 to input interger, then extract odd numbers and add them together
	let sumOfOdds = 0;
	for (let int = 1; int <= intNumber; int++) {
		if (int % 2 !== 0) {
			sumOfOdds += int;
		}
	}
	//Output: Display sum of odd numbers
	document.getElementById("output").innerHTML =
		"The sum of odd numbers is" + " " + sumOfOdds;
}
