function PrintDiagonals(matrix) {
	let count = 0;
	let row, col;
	while (count < matrix.length) {
		row = 0;
		col = count;
		while (col < matrix.length) {
			console.log(matrix[row][col]);
			col++;
			row++;
		}
        console.log('\n');
		count++;
	}
}
PrintDiagonals([
	[11, 12, 13, 14],
	[21, 22, 23, 24],
	[31, 32, 33, 34],
	[41, 42, 43, 44],
]);
