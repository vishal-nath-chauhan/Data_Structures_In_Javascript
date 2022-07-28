function Pattern(num) {
	let spaces = parseInt(num / 2);
	let stars = 1;
	for (let iteration = 1; iteration <= num; iteration++) {
		let temp = "";
		for (let i = 1; i <= spaces; i++) {
			temp += "   ";
		}
		for (let i = 1; i <= stars; i++) {
			temp += "*  ";
		}
		if (iteration <= parseInt(num / 2)) {
			spaces--;
			stars += 2;
		} else {
			stars -= 2;
			spaces++;
		}
        console.log(temp);
	}
}
Pattern(5)
