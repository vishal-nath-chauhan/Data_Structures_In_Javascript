function ToggleOptica(string) {
	let smallA = "a".charCodeAt();
	let bigA = "A".charCodeAt();
	let smallZ = "z".charCodeAt();
	let bigZ = "Z".charCodeAt();
	let final = "";
	for (let i = 0; i < string.length; i++) {
		let currentCharCode = string[i].charCodeAt();
		if (currentCharCode >= smallA && currentCharCode <= smallZ) {
			let upperCaseCode = bigA + currentCharCode - smallA;
            // console.log({upper: String.fromCharCode(upperCaseCode)});
			final += String.fromCharCode(upperCaseCode);
		} else {
			let lowerCaseCode = smallA + currentCharCode - bigA;
			final += String.fromCharCode(lowerCaseCode);
            // console.log({lower: String.fromCharCode(lowerCaseCode)});
		}
	}
    console.log(final);
}
ToggleOptica('pepCODinG')
