function SubArray(arr) {
	let len = arr.length;
	for (let i = 0; i < len; i++) {
		for (let j = i; j < len; j++) {
            let temp ='';
            for(let k=i;k<=j;k++){
                temp+=arr[k]+'  '
            }
            console.log(temp);
		}
	}
}

SubArray([10,20,30])