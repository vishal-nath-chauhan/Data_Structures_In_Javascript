function ExitPoint(matrix) {
	console.log(matrix);
	let dir = 0;
	let prevRow, prevCol, row, col;
	row = 0;
	col = 0;
	while (!(row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length)) {
		dir = (dir + matrix[row][col]) % 4;
		prevCol = col;
		prevRow = row;
		if (dir === 0) {
			col++;
		} else if (dir === 1) {
			row++;
		} else if (dir === 2) {
			col--;
		} else {
			row--;
		}
	}
	console.log(prevRow, prevCol);
}

ExitPoint([
	[0, 0, 1, 0],
	[1, 0, 0, 0],
	[0, 0, 0, 0],
	[1, 0, 1, 0],
]);
