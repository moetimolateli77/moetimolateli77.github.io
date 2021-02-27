function fixedLoops() {
	let output1 = "";
	let i = 0;
	while (i < 2) {
		output1 = output1 + `Part 1:${i}<br>`;
		i++;
	}
	document.getElementById("display1").innerHTML = output1;

	/* output should be
Part 1:0
Part 1:1
*/
	var output2 = "";
	for (let j = 0; j < 3; j++) {
		if (j !== 2) {
			output2 += `Part 2:${j}, `;
		} else {
			output2 += `Part 2:${j}`;
		}
	}
	document.getElementById("display2").textContent = output2;

	/* output should be
Part 2:0, Part 2:1, Part 2:2
*/
	let output3 = "";
	for (let k = 0; k < 4; k++) {
		output3 += k + " ";
	}
	document.getElementById("display3").textContent = output3;

	/*output should be
0 1 2 3
*/
	let balance = 1000;
	const rate = 0.1;
	let n = 30;
	for (let s = 1; s < n; s++) {
		interest = balance * rate;
		balance += interest;
	}

	document.getElementById("display4").textContent = balance.toFixed(2);

	/*output should be
15863.09
*/
}
