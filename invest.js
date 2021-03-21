/* Input: Principal, Annual rate, Number of years, and Periods per year
 * Processing: Calculate Future Value
 * Output: Future Value
 */
function doFV() {
	// Input: Accepting Principal, Annual rate, Number of years, and Periods per year
	let principal = parseFloat(document.getElementById("pri").value);
	let annualRate = parseFloat(document.getElementById("ann").value);
    let years = parseFloat(document.getElementById("num").value);
    let periodsPerYear = parseFloat(document.getElementById("per").value);
    let r = annualRate / periodsPerYear
    let n = years * periodsPerYear
	//Processing: Calling computeFutureValue function  
	let futureValue =  computeFutureValue(principal, r, n)
	// Output: Displaying Future Value
	document.getElementById("output").value = futureValue.toFixed(2);
}
function computeFutureValue(a, r, n){
	//Processing: Calculating Future Value
	return a * Math.pow((1 + r), n)
}
