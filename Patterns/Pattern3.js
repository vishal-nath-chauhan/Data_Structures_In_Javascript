function Pattern(num) {
	for (let i = 1; i <= num; i++) {
		let temp = "";
		let num_spaces = num - i;
		let stars = i;
		while (num_spaces > 0) {
			temp += "   ";
			num_spaces--;
		}

		while (stars > 0) {
			temp += "*  ";
			stars--;
		}

		console.log(temp);
	}
}
Pattern(6);

// expected Pattern

// 				*
// 			*	*
// 		*	*	*
// 	*	*	*	*
// *	*	*	*

// logic
//  number of stars == rownum
// number of spaces = num-stars

//      0    1   2   3   4

//       				*
//       			*	*
//       		*	*	*
//       	*	*	*	*
//       *	*	*	*	*
