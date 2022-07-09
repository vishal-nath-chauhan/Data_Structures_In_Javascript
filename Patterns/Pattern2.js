function Pattern(num) {
	for (let i = 0; i < num; i++) {
		let temp = "";
		for (let j = num-1-i; j >=0; j--) {
            //  we started our count from 0 ,so thats why j will start from n-1-i
            // ex num=6 ,j=6-1-0=>5
			temp += "*    ";
		}
		console.log(temp);
	}
}
Pattern(6);

// expected Pattern
//      *	*	*	*	*
//      *	*	*	*
//      *	*	*
//      *	*
//      *

// logic

//  number of stars == num-row number

//      0    1   2   3   4

//      *	*	*	*	*
//      *	*	*	*
//      *	*	*
//      *	*
//      *
