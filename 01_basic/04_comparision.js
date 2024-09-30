//console.log(2>1);
//console.log(2>=1);
//console.log(2<1);
//console.log(2==1);
//console.log(2!=1);


//console.log("2" > 1);
//console.log("02" > 1);

//console.log(null > 0);
//console.log(null == 0);
//console.log(null >= 0);

//console.log(undefined == 0);
//console.log(undefined > 0);
//console.log(undefined < 0);
// * we have to avoide these kind of operations

let number = 55

let someNumber = Number(number)
console.log(someNumber);
console.log(typeof someNumber);


console.log(typeof 42);           // "number"
console.log(typeof "hello");      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (historical bug)
console.log(typeof Symbol());     // "symbol"
console.log(typeof 123n);         // "bigint"
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"
