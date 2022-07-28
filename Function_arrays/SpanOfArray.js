function SpanOfArray(arr) {
	let max = Number.NEGATIVE_INFINITY;
	let min = Number.POSITIVE_INFINITY;
	let len = arr.length;
	for (let i = 0; i < len; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] >= max) {
			max = arr[i];
		}
	}
    console.log(max-min);
}

SpanOfArray([6, 15, 30, 40, 4, 11, 9]);
