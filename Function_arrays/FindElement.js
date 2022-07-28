function FindElement(arr, element) {
	let index;
	let len = arr.length;
	for (let i = 0; i < len; i++) {
		if (arr[i] === element) {
			index = i;
		}
	}
	if (!index) {
		index = -1;
	}
	console.log(index);
}
FindElement([15, 30, 40, 4, 11, 9], 40);
