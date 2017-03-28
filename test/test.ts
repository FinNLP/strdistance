/// <reference path="../node_modules/@types/node/index.d.ts" />

import strDistance from "../src/index";

const cases = [
	["alex",	"alxe",		"ales"],
	["alex",	"alxe",		"lesa"],
	["albert",	"balbert",	"shalbert"],
	["ranger",	"rangre",	"ranget"],
	["blow",	"blows",	"blouser"],
	["duck",	"luck",		"shuck"],
	["fella",	"fela",		"fellas"],
	["abc",		"abcx",		"acbx"],
	["few",		"wef",		"fewx"],
	["coffe",	"cafee",	"cunffee"],
	["rong",	"wrong",	"right"],
];



cases.forEach((arr)=>{
	if(strDistance(arr[0],arr[1]) < strDistance(arr[0],arr[2])) {
		console.log(`✔ PASS: distance between ${arr[0]} and ${arr[1]} is less than distance between ${arr[0]} and ${arr[2]}`);
	}
	else {
		console.log(`❌ FAIL: distance between ${arr[0]} and ${arr[1]} is more than distance between ${arr[0]} and ${arr[2]}`);
	}
});