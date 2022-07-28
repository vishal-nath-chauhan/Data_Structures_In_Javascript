function findString(string) {
	// console.log(isPalindrome('NITIN'));
	for (let i = 0; i < string.length; i++) {
		for (let j = i; j <= string.length; j++) {
			let check = isPalindrome(string.slice(i, j));
			if (check) {
				console.log(string.slice(i, j));
			}
		}
	}
}

function isPalindrome(string) {
	let low = 0;
	let high = string.length - 1;
	while (low < high) {
		if (string[low] != string[high]) {
			return false;
		}
		low++;
		high--;
	}
	return true;
}
findString('abcc');
