function Pattern(num) {
	let totalCols = num * 2 - 1;
	let spaces = totalCols - 2;
	console.log({ totalCols });

	let digitCount = 1;
	for (let iter = 1; iter <= num; iter++) {
		let temp = "";
		let ldigit = 0;
		let rdigit = 0;
		let ss = 0;

		for (let digit = 1; digit <= iter; digit++) {
			ldigit++;
			temp += iter + "  ";
		}
		for (let spc = 1; spc <= spaces; spc++) {
			temp += "   ";
			ss++;
		}
		for (let digit = 1; digit <= iter; digit++) {
			temp += iter + "  ";
			rdigit++;
		}
        console.log({ldigit,ss,rdigit});
		console.log(temp);
		spaces -= 2;
	}
}
Pattern(4);
