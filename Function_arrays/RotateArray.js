function Rotate(arr, k) {
	let len = arr.length;
	if (k > len) {
		k = k % len;
	}
	if (k < 0) {
		k += len;
	}
	Reverse(arr, 0, len - k - 1);
	Reverse(arr, len - k, len - 1);
	Reverse(arr, 0, len - 1);
	console.log(arr);
}

function Reverse(arr, i, j) {
	let len = arr.length;
	let temp;
	while (i <= j) {
		temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
		i++;
		j--;
	}
	// console.log(arr);
}

Rotate([1, 2, 3, 4, 5], 3);
