function Pattern(num) {
	let spaces = parseInt(num / 2);
	let stars = 1;
	for (let row = 1; row <= num; row++) {
		let temp = "";

		for (let col = 1; col <= num - 1; col++) {
			// temp+=''
			if (row === 1 || row === num) {
				temp+='*	'
				// console.log({row});
			}else if (row===col || row === (num-row)+1){
				// console.log({row,col});
				temp+='*	'
			}else {
				temp+='		'
			}
		}
		console.log(temp);
	}
}

function fillContent(data, iteration, type = "*    ") {
	let count = 1;
	while (count <= iteration) {
		data += type;
		count++;
	}
	return data;
}

Pattern(7);
