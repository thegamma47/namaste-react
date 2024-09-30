const marvelheros=["ironman","thor","spiderman"]
const dc=[`superman`,`batman`,`flash`]

marvelheros.push(dc)
//console.log(marvelheros);

 const allheros =marvelheros.concat(dc)
console.log(allheros);

const allnewheros=[...marvelheros, ...dc]

//console.log(allnewheros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array);


let array=["gamma"]
console.log(Array.isArray("gamma"));
console.log(array.from("gamma"));
console.log(array.from({name:"gammma"}));

let score1=662
let score2=665
let score3=656

console.log(array.of(score1,score2,score3));

