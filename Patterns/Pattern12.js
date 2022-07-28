function Pattern(num) {
	let a = 0;
	let b = 1;
	let c = a + b;
	for (let row = 1; row <= num; row++) {
		let temp = "";
		for (let col = 1; col <= row; col++) {
			temp += `${a} `;
			a = b;
			b = c;
			c = a + b;

		}
		console.log(temp);
	}
}
Pattern(5);
