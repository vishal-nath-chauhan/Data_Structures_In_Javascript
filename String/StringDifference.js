function StringDifference(string) {
	let final = "";
	let i = 0;
	for (i; i < string.length - 1; i++) {
		let diff = string[i + 1].charCodeAt() - string[i].charCodeAt();
		final += string[i] + diff;
	}
	final += string[i];
	console.log(final);
}
StringDifference("abecd");
