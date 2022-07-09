function DigitsOfNumber(num) {
	let temp = num;
	let count = 0;
	while (temp > 0) {
		temp = parseInt(temp / 10);
		count++;
	}
	let power = Math.pow(10, count-1);
	temp = num;
	while (temp > 0) {
		let quotient = parseInt(temp / power);
		console.log({ quotient });
		temp = parseInt(temp % power);
		power = power / 10;
	}
}
// DigitsOfNumber(1243);
DigitsOfNumber(124)
// DigitsOfNumber(13)
// DigitsOfNumber(0000) //edge case
