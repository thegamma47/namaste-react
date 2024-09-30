const name = "gamma"
const repocount = 0
//  concatinate=adding two strings 
//console.log(name+repocount);

console.log(`hello my name is ${name} and my repo is &{repocount}`);

const gamename = new String(`gamma47`)

console.log(gamename[0]);
console.log(gamename.__proto__);

//console.log(gamename.length);
//console.log(gamename.toUpperCase());
//  console.log(gamename.charAt(5

// $$$$$$$$$$ methods in string  $$$$$$$$$$$$$$$$

// #charat():-
let str = "gamma"
console.log(str.charAt(3));

// #charCodeAt(index):
console.log(str.charCodeAt(1));

// #concat(string1, string2, ..., stringN):
let str2 ="sexy"
console.log(str.concat("",str2));

// #includes(searchString, position):
console.log(str.includes("mm"));

// #endsWith(searchString, length):
console.log(str.endsWith("xy"));

// #indexOf(searchValue, fromIndex):
console.log(str.indexOf("5"));

// # .touppercase:
console.log(str.touppercase());
