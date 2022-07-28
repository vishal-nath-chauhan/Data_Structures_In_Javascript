function saddle(matrix) {
	let rows = matrix.length;
	let cols = matrix[0].length;
	let min = Number.MAX_SAFE_INTEGER;
	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			if (matrix[row][col]<min) {
				min = matrix[row][col];
			}
		}
        console.log({min});
	}
}

saddle([
	[11, 12, 13, 14],
	[22, 21, 23, 24],
	[31, 32, 33, 34],
	[41, 42, 43, 44],
]);
