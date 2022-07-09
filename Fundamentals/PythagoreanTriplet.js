function PythagoreanTriplet(a, b, c) {
	if (b > a && b > c && b * b === a * a + c * c) {
		console.log("yes");
		return;
	} else if (c > a && c > a && c * c === b * b + a * a) {
		console.log("yes");
		return;
	} else if (a > b && a > c && a * a === c * c + b * b) {
		console.log("yes");
		return;
	}
	console.log("no");
}
PythagoreanTriplet(4, 3, 5);
