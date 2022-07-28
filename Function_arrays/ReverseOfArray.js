function Reverse(arr) {
	let len = arr.length;
	let i = 0,
		j = len - 1,
		temp;
	while (i <= j) {
		temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
        i++;
        j--;
	}
    console.log(arr);
}
Reverse([1,2,3,4,5])
