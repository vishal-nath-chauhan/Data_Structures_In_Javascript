function PrimeFactorization(num) {
	for (let fac = 2; fac * fac < num; fac++) {
        console.log({fac,sq:fac * fac ,num});
		while (num % fac == 0) {
			console.log({ num ,fac});
			num = num / fac;
		}
	}
	if (num != 1) {
		console.log({ d:12,num });
	}
}

PrimeFactorization(1440);

// DRY RUN

// | Number  | fac  | New Number  | While loop condition (Number%fac==0)              |
// | 1440    | 2    | 720         | 720%2==0 => satisfied                             |
// | 720     | 2    | 360         | 360%2==0 => satisfied                             |
// | 360     | 2    | 180         | 180%2==0 => satisfied                             |
// | 180     | 2    | 90          | 90%2==0 =>  satisfied                             |
// | 90      | 2    | 45          | 45%2==0 =>  failed                                |

// while loop breaks => fac++
// check for loop condition => fac*fac<num => 3*3<45 => 4<90
// | 45      | 3    |15           | 45%3==0 =>  satisfied                             |
// | 15      | 3    |5            | 5%3==0 =>   failed                                |
// while loop breaks => fac++
// check for loop condition => fac*fac<num => 4*4<5 => 16<6 => failed 
// FOR LOOP BREAKS

// check if condition num!=1 => 5!=1=> log (5)



