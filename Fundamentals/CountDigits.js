function countDigits(num) {
	let count = 0;
	while (num > 0) {
		num = parseInt(num / 10);
		count++;
	}
    console.log(count);
}

countDigits(1011) // 4
countDigits(12513) // 5
// edge cases => if numbe starts with 0 it wont work
countDigits(000)  // 0
countDigits(0001) // 1

