function Pattern(num) {
	let mid = parseInt(num / 2);
	for (let row = 1; row <= num; row++) {
		let temp = "";
		for (let col = 1; col <= num; col++) {
			if (col === 1 || col === num) {
				temp += "*    ";
			} else if (row <= mid+1 && (row === col || row === num - col + 1)) {
				temp += "*    ";
			} else {
				temp += "     ";
			}
		}
		console.log(temp);
	}
}
Pattern(5);
Pattern(7);
Pattern(13);


