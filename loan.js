/* Input: Principal, Annual interest rate, Number of years, Payments per year, and Number of payments paid to date
 * Processing: Calculate Payment and Payoff Amount
 * Output: Payment and Payoff Amonut
 */
function doPayment() {
	// Input: Accepting Principal, Annual interest rate, Number of years, and Paymnets per year
	let principal = parseFloat(document.getElementById("pri").value);
	let annualRate = parseFloat(document.getElementById("ann").value);
	let years = parseFloat(document.getElementById("num").value);
	let paymentsPerYear = parseFloat(document.getElementById("per").value);
	let r = annualRate / paymentsPerYear;
	let n = years * paymentsPerYear;
	//Processing: Calling computePayment
	let payment = computePayment(principal, r, n);
	// Output: Displaying Payment
	document.getElementById("output").value = payment.toFixed(2);
    return [r, n, principal];
}
function computePayment(a, r, n) {
	//Processing: Calculating Payment,
	return a * r / (1 - Math.pow((1 + r), -n));
}
function doBalance() {
  // Input: Number of payments paid to date and Principal
	let NumberOfPaymentsPaidToDate = parseFloat(document.getElementById("numOf").value);
    //Processing: Calling doPayment
    let [r, n, principal] = doPayment();   
    //Processing: Calling  computePayment
	let p = computePayment(principal, r, n);
    //Processing: Calling computeBalance
	let balance = computeBalance(principal, NumberOfPaymentsPaidToDate, r, p);
	// Output: Displaying balance 
	document.getElementById("output2").value = balance.toFixed(2);  
}
function computeBalance(a, d, r, p){
    return (a * Math.pow((1 + r), d )) - ((p * (( Math.pow((1 + r), d)) - 1) ) / r);
}
