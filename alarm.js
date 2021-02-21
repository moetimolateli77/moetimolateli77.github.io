/* Input: Date from the computer
 * Processing: Checks date and reads if it's weekend or holidays
 * Output: Outputs massege if the days of the week are weekends or holidays
 */
function alarm() {
	// Input: Accepting date form user computer
	let now = new Date();
	let month = now.getMonth();
	let dayOfMonth = now.getDate();
	let dayOfWeek = now.getDay();
	// Output: Setting alarm messege to output massege during weekdays that are not holidays
	let AlarmMassege = "Get up!";
	// Processing: Checking if date is weekdays are weekends or holidays
	if (
		dayOfWeek == 0 ||
		dayOfWeek == 6 ||
		(month == 0 && dayOfMonth == 1) ||
		(month == 6 && dayOfMonth == 4) ||
		(month == 11 && dayOfMonth == 25)
	) {
		AlarmMassege = "Sleep in";
	}
	// Output: Displaying alarm massege
	document.getElementById("output").innerHTML = AlarmMassege;
}
