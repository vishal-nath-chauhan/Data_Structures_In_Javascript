function Pattern(num) {
	let spaces = num-1;
	let stars = 1;
	for (let iteration = 1; iteration <= num; iteration++) {
        let temp=''
        for (let i = 1; i <= spaces; i++) {
            temp+='     '
        }
		for (let i = 1; i <= stars; i++) {
            temp+='*    '
		}
        spaces=spaces-1;
        console.log(temp);
	}
}
Pattern(5)