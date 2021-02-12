/* Input: Two numbers and arithmetic operator
 * Processing: Perform arithmetic operation and check if it is true
 * Output: Text to confirm if the the answer is correct or wrong
 */
function calculate() {
	// Input: Accepting and reading user inputs.
	let x = parseFloat(document.getElementById("number1").value);
	let op = document.getElementById("operator").value;
	let y = parseFloat(document.getElementById("number2").value);
	let a = parseFloat(document.getElementById("answer").value);

	// Processing: Performing arithmetic operation then comparing to the input(answer).
	let output;
	switch (op) {
		case "+":
			if (x + y == a) {
				output = "Correct! 🏆";
			} else {
				output = "Incorrect 😥";
			}
			break;
		case "-":
			if (x - y == a) {
				output = "Correct! 🏆";
			} else {
				output = "Incorrect 😥";
			}
			break;
		case "*":
			if (x * y == a) {
				output = "Correct! 🏆";
			} else {
				output = "Incorrect 😥";
			}
			break;
		case "/":
			if (x / y == a) {
				output = "Correct! 🏆";
			} else {
				output = "Incorrect 😥";
			}
			break;
		default:
			output = "invalid input ⚠";
	}
	// Output: Displays if the answer is correct or incorrect
	document.getElementById("output").innerHTML = output;
}
