function IsNumberPrime(num) {
	if (num <= 1) return false;
	for (let n = 2; n * n <= num; n++) {
		// console.log('res',n,num)
		if (num % n === 0) return false;
	}
	return true;
}

function PrintPrimesTillN(num) {
	for (let i = 2; i <= num; i++) {
		let isPrime = IsNumberPrime(i);
		if (isPrime) console.log('Prime Number : ',i);
	}
}

PrintPrimesTillN(20)
