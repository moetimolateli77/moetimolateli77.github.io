/* Input: Amount in $
 * Processing: Calculate discount based on the day of the week
 * Output: Discount amount plus sales tax(Total amount)
 */
function discount() {
	// Input: Accepting and reading subtotal from the user
	let subTotal = parseFloat(document.getElementById("subtotal").value);

	// Processing: Accepting date form user computer
	let dayOfWeek = new Date().getDay(3);

	// Processing: Calculating Total amount
	let taxAmount = subTotal * 0.06;
	let subtotalTax = subTotal + taxAmount;
	let totalAmount = subtotalTax;
	let discountAmount = subtotalTax * 0.1;

	if (subTotal > 50 && (dayOfWeek == 2 || dayOfWeek == 3)) {
		totalAmount = subtotalTax - discountAmount;
	}

	// Output: Display total amount
	document.getElementById("output").innerHTML =
		"Please pay a total amount of $" + totalAmount.toFixed(2);
}
