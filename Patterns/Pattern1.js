function Pattern(num) {
	for (let i = 0; i < num; i++) {
		let temp = "";
		for (let j = 0; j <= i; j++) {
			temp += "*    ";
		}
        console.log(temp);
	}
}
Pattern(6)

// expected Pattern
// *
// *	*
// *	*	*
// *	*	*	*
// *	*	*	*	*
// *	*	*	*	*	*

// logic

//  number of stars == row number

//      0    1   2   3   4   5
// 0    *
// 1    *	*
// 2    *	*	*
// 3    *	*	*	*
// 4    *	*	*	*	*
// 5    *	*	*	*	*	*
