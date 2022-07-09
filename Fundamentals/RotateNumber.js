function RotateNumber(num, k) {
	let count = 0;
	let temp = num;
	while (temp > 0) {
		temp = parseInt(temp / 10);
		count++;
	}
	if (k < 0) {
		k = k + count;
	}
	if (k > count) {
		k = k % count;
	}

	let remainder = num % Math.pow(10, k);
	let quotient = parseInt(num / Math.pow(10, k));
	quotient += Math.pow(10, count - k) * remainder;
	console.log(quotient);
}

RotateNumber(562984, 7);
RotateNumber(562984, -2);

