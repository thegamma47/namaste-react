const tinderuser =new Object()


 tinderuser.id = "1334dajfvh"
 tinderuser.name ="sammy"
tinderuser.isloggedin = false

//console.log(tinderuser);


const regularuser = {
    email: "thegahvha@gmail.com",
    fullname: {
      userfullname: {
        firstname: "thegamma",
        lastname: "47"
      }
    }
  };

//console.log(regularuser.fullname); 

const obj1={1: "a", 2: "b" };
const obj2={3: "a", 4: "b" };

const obj3 = { obj1, obj2 };
const obj4 = object.assign({},obj1,obj2)
//console.log(obj3);









const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
}

const { courseInstructor } = course;
console.log(courseInstructor); // Output: "hitesh"


// {
//   "name":"gamma",
//   "coursename":"js in hindi",
//   "price":"free"


// }