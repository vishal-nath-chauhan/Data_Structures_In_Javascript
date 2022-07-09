function InverseOfNumber(num) {
	let newNumber = 0;
	let temp = num;
    let pos=1;
	while (temp > 0) {
		let remainder = temp % 10;
        temp=parseInt(temp/10);
		newNumber += Math.pow(10, remainder-1) * pos;
        pos++;
	}
}

InverseOfNumber(3142)
