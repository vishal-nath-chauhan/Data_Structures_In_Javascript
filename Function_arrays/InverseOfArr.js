function Inverse(arr) {
	let len = arr.length;
	let final = [];
	for (let index = 0; index < len; index++) {
		final[arr[index]] = index;
	}
    console.log(final);
}
Inverse([4,0,2,3,1])
