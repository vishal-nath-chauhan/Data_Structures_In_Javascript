function spiraldisplay(matrix) {
	let rowMin = 0,
		rowMax = matrix.length - 1,
		colMin = 0,
		colMax = matrix[0].length - 1;
	let totalElements = matrix.length * matrix[0].length;
	let count = 0;
	while (count != totalElements) {
		for (let row = rowMin; row <= rowMax; row++) {
			console.log(matrix[row][colMin]);
			count++;
		}
		for (let col = colMin + 1; col <= rowMax; col++) {
			console.log(matrix[rowMax][col]);
			count++;
		}

		for (let row = rowMax - 1; row >= rowMin; row--) {
			console.log(matrix[row][colMax]);
			count++;
		}

		for (let col = colMax - 1; col > colMin; col--) {
			console.log(matrix[rowMin][col]);
			count++;
		}
		rowMin++;
		colMin++;
		colMax--;
		rowMax--;
	}
}
spiraldisplay([
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16],
]);
