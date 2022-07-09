//  What is LCM ?
// LCM (Least Common Multiple) of two numbers is the smallest number which can be divided by both numbers. 

// For example, LCM of 15 and 20 is 60, and LCM of 5 and 7 is 35.

//  What is HCF/ GCD ?
// In mathematics, the greatest common divisor (GCD) of two or more integers, which are not all zero, is the largest positive integer that divides each of the integers. For two integers x, y, the greatest common divisor of x and y is denoted {\displaystyle \gcd(x,y)}{\displaystyle \gcd(x,y)}. For example, the GCD of 8 and 12 is 4, that is, {\displaystyle \gcd(8,12)=4}{\displaystyle \gcd(8,12)=4}.[1][2]

// function GCD_LCM(num1, num2) {
// 	let min_num, max_num, remainder;
// 	if (num1 >= num2) {
// 		min_num = num2;
// 		max_num = num1;
// 	} else {
// 		min_num = num1;
// 		max_num = num2;
// 	}
// 	while (max_num % min_num != 0) {
// 		remainder = max_num % min_num;
// 		max_num = min_num;
// 		min_num = remainder;
// 	}
//     let lcm = (num1*num2)/min_num;
//     console.log({lcm,hcf:min_num});
// }
// GCD_LCM(24, 36);

function GCD_LCM_V2(num1, num2) {
	let min_num, max_num;
	if (num1 >= num2) {
		min_num = num2;
		max_num = num1;
	} else {
		min_num = num1;
		max_num = num2;
	}
	let hcf;
	for (let i = min_num / 2; i >= 1; i--) {
        if (num1 % i == 0 && num2 % i === 0) {
            hcf = i;
			console.log({ i });
			break;
		}
	}
    let lcm = (num1*num2)/hcf;
    console.log({lcm,hcf});

}
GCD_LCM_V2(24, 36);
