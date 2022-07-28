function Pattern(num) {
    let stars = 2;
    
	let spaces = num-stars;
	for (let iteration = 1; iteration <= num; iteration++) {
        let temp=''
        for (let i = 1; i <= stars/2; i++) {
            temp+='*    '
		}
        for (let i = 1; i <= spaces; i++) {
            temp+='     '
        }
		for (let i = 1; i <= stars/2; i++) {
            temp+='*    '
		}
        spaces=spaces-1;
        console.log(temp);
	}
}
Pattern(5)