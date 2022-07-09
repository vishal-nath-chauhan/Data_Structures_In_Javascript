function ReverseOfNumber(num){
    let count = 0;
	while (num > 0) {
        let rem = num%10;
        console.log(rem);
		num = parseInt(num / 10);

		count++;
	}
    // console.log(count);
}

ReverseOfNumber(1234)