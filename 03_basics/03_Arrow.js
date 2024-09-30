const user ={
    username:"gamma",
    price:9999,

    welcomemessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
 }

}

//  user.welcomemessage()
//   user.username = "sam"
//   user.welcomemessage()

// console.log(this);

// function chai(){
//     let username ="gamma"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
// let username ="gamma"
//      console.log(this.username);
// }

// const chai = ()=>{
//     let username ="gamma"
//          console.log(this);
//     }

// const addtwo =(num1,num2)=>{
//     return num1+num2
// }

// const addtwo =(num1,num2)=> num1+num2
const addtwo =(num1,num2)=> ( num1+num2)
console.log(addtwo(4,5))