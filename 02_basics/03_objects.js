//singleton-object.create(constructor methord)

//object literals

const mysym = Symbol("key1");

const jsuser = {
  "full name": "the gamma",
  [mysym]: "mykey1", // Use computed property name syntax
  age: 19,
  location: "jhansi",
  email: "thegamma551@gmail.com",
  isloggedin: false,
  lastlogindays: ["sunday", "monday"]
};

//console.log(jsuser.email); // Output: "thegamma551@gmail.com"
//console.log(jsuser["email"]); // Output: "thegamma551@gmail.com"
//console.log(jsuser["full name"]); // Output: "the gamma"
//console.log(jsuser[mysym]); // Output: "mykey1"

jsuser.email ="gamma5512@gmail.com"
Object.freeze(jsuser)

jsuser.greetings =function(){
    console.log("hello gamma");
}

console.log(jsuser.greetings());