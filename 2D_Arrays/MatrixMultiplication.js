function MatrixMultiplication(matrix1, matrix2) {
	if (matrix1[0].length === matrix2.length) {
		let rows = matrix1.length;
		let cols = matrix2[0].length;
		let final = Array(matrix1.length)
			.fill(0)
			.map(() => Array(matrix2[0].length).fill(0));
		for (let row = 0; row < rows; row++) {
			for (let col = 0; col < cols; col++) {
				for (let k = 0; k < matrix1[0].length; k++) {
					final[row][col] += matrix1[row][k] * matrix2[k][col];
				}
			}
		}
	} else {
		console.log("Invalid Input");
	}
}
MatrixMultiplication(
	[
		[2, 5],
		[1, 1],
		[3, 2],
	],
	[
		[2, 5],
		[4, 1],
	]
);
