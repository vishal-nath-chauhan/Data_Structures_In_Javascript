function compression(string) {}

function compression1(string) {
	let prev = string[0];
	let final = prev;
	for (let i = 0; i < string.length; i++) {
		if (prev != string[i]) {
			prev = string[i];
			final += string[i];
		}
	}
	console.log({ final });
}

function compression2(string) {
	let prev = string[0];
	let final = prev;
	let count = 1;
	for (let i = 1; i < string.length; i++) {
		// if (prev != string[i]) {
		// 	prev = string[i];
		// 	final += string[i];
		// }
		if (prev === string[i]) {
			count++;
		} else {
			if (count > 1) {
				final += count;
			}
			count = 1;
			prev = string[i];
			final += prev;
		}
		console.log({ prev, count, final });
	}
	if (count != 0) {
		final += count;
	}
	console.log({ final });
}

compression2("aaabbccdee");
