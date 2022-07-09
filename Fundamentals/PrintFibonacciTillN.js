function PrintFibonacciTillN(num) {
	let counter = 0;
	let a = 0;
	let b = 1;
	let c;
	while (counter <= num) {
		c = a + b;
		console.log(a);
		a = b;
		b = c;
		counter++;
	}
}

PrintFibonacciTillN(20);
