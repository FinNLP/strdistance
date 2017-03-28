export default function (string1: string, string2: string) {
	let distance = Math.abs(string1.length - string2.length) * 0.1;
	const both = string1 + string2;
	for (let i = both.length - 1; i >= 0; i--) {
		if (string2.indexOf(both[i]) === -1 || string1.indexOf(both[i]) === -1) distance = distance + 0.6;
	}
	for (let i = string1.length - 1; i >= 0; i--) {
		if (string1[i] !== string2[i] && string1[i] !== string2[i + 1] && string1[i] !== string2[i - 1]) distance = distance + 0.15;
		else if (string1[i] !== string2[i] && string1[i] !== string2[i + 1]) distance = distance + 0.1;
		else if (string1[i] !== string2[i]) distance = distance + 0.05;
		else distance = distance - 0.05;
	}
	for (let i = string2.length - 1; i >= 0; i--) {
		if (string2[i] !== string1[i] && string2[i] !== string1[i + 1] && string2[i] !== string1[i - 1]) distance = distance + 0.15;
		else if (string2[i] !== string1[i] && string2[i] !== string1[i + 1]) distance = distance + 0.1;
		else if (string2[i] !== string1[i]) distance = distance + 0.05;
		else distance = distance - 0.05;
	}
	return distance;
}