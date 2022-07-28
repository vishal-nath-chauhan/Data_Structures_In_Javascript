function Pattern(num) {
	let spaces = parseInt(num / 2);
	let stars = 1;
	let count = 1;
	while (count <=num) {
		let temp = "";
		let nspaces = spaces;
		let nstars = stars;
        // console.log({nspaces,nstars,count,half:parseInt(num / 2)});
		while (nspaces > 0) {
			temp += "   ";
			nspaces--;
		}
		while (nstars > 0) {
			temp += "*  ";
			nstars--;
		}
		if (count <= parseInt(num / 2)) {
			stars += 2;
			spaces--;
		} else {
			stars -= 2;
			spaces++;
		}
		console.log(temp);
		count++;
	}
}
Pattern(7);
