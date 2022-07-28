function ArraySum(n1, arr1, n2, arr2) {
	let max = n1 >= n2 ? n1 : n2;
	max = max - 1;
	let final = [];
	let carry = 0;
	while (n1 > 0 || n2 > 0) {
		let e1 = arr1[n1 - 1] || 0;
		let e2 = arr2[n2 - 1] || 0;
		let sum = e1 + e2 + carry;
		let digit = sum % 10;
		carry= parseInt(sum / 10);
		final[max] = digit;
		max--;
		n1--;
		n2--;
	}
	console.log(final);
}
ArraySum(5, [3, 1, 0, 7, 5], 6, [1, 1, 1, 1, 5, 1]);
