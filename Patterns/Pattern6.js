function Pattern(num) {
	let total = num * 2 - 2;
	let stars = total - 2;
	let spaces = 2;
	for (let iteration = 1; iteration <= num; iteration++) {
        let temp = "";
		let lstar = parseInt(stars / 2);
		let rstar = parseInt(stars / 2);


		for (let i = 1; i <= lstar; i++) {
			temp += "*      ";
		}
		for (let i = 1; i <= spaces; i++) {
			temp += "       ";
		}
		for (let i = 1; i <= rstar; i++) {
			temp += "*      ";
		}
		console.log(temp);
		if (iteration <= num / 2) {
			stars -= 2;
			spaces += 2;
		} else {
			stars += 2;
			spaces -= 2;
		}
	}
}
Pattern(7);
