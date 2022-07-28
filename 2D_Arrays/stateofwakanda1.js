function StateOfWakanda1(matrix) {
	let rows = matrix.length;
	let cols = matrix[0].length;
	for (let col = 0; col < cols; col++) {
		if (col % 2 === 0) {
			for (let k = 0; k < rows; k++) {
				console.log(matrix[k][col]);
			}
		} else {
			for (let k = rows - 1; k >= 0; k--) {
				console.log(matrix[k][col]);
			}
		}
	}
}
StateOfWakanda1([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[10, 12, 21],
]);
