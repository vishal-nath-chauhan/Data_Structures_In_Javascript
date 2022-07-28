function FindIndex(arr, d) {
	let fIndex = null,
		lastIndex;
	let len = arr.length;
	for (let index = 0; index < len; index++) {
		if (arr[index] === d) {
			if (fIndex != null) {
				lastIndex = index;
			} else {
				fIndex = index;
			}
		}
	}
	console.log(fIndex, lastIndex);
}
FindIndex([1, 5, 10, 15, 22, 33, 33, 33, 33, 33, 40, 42, 55, 66, 77], 33);
