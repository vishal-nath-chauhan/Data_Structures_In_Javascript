function IsNumberPrime(num) {
	if (num <= 1) return false;
	for (let n = 2; n * n <= num; n++) {
        // console.log('res',n,num)
		if (num % n === 0) return false;
	}
	return true;
}
console.log(IsNumberPrime(5));
console.log(IsNumberPrime(4));
console.log(IsNumberPrime(11));
console.log(IsNumberPrime(1));




