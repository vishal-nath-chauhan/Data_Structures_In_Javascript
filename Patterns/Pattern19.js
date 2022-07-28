function Pattern(num) {
	let mid = parseInt(num / 2) + 1;
	for (let row = 1; row <= num; row++) {
		let temp = "";
		for (let col = 1; col <= num; col++) {
			if (col === mid || row === mid) {
				temp += "*    ";
			} else if (col < mid && row === 1) {
				temp += "*    ";
			} else if (row > mid && col === 1) {
				temp += "*    ";
			} else if (row < mid && col === num) {
				temp += "*    ";
			} else if (row === num && col > mid) {
				temp += "*    ";
			} else {
				temp += "     ";
			}
		}
		console.log(temp);
	}
}
Pattern(5);
console.log('\n\n');
Pattern(7);
console.log('\n\n');

Pattern(9);


