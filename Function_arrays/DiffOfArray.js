function DiffOfArray(n1, arr1, n2, arr2) {
	let max = n1 >= n2 ? n1 : n2;
	max = max - 1;
	let carry = 0;
	let diff, e1, e2, digit;
	let final = [];

	while (n1 > 0 || n2 > 0) {
		// e1 = arr1[n1-1] || 0;
		// e2 = arr2[n2-1] +carry || 0;
		// if (e2 < e1) {
		// 	e2 = e2 + 10;
		// 	carry = -1;
		// }
		// diff = e2 - e1 ;
		// final[max] = diff;
		// max--;
		// n1--;
		// n2--;
        e1= n1 > 0 ? arr1[n1-1]:0;
        e2= n2 > 0 ? arr2[n2-1]:0;
        diff = e2-e1 + carry ;
        if(diff<0){
            diff+=10;
            carry=-1
        }else{
            carry=0
        }
        final[max]=diff;
        max--;
        n1--;
        n2--;

	}
	console.log(final);
}

DiffOfArray(3, [2, 6, 7], 4, [1, 0, 0, 0]);
