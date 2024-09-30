function saymyname(){
    console.log("G");
   console.log("a");
   console.log("m");
   console.log("m");
   console.log("a");
   }
   
   //saymyname()
   
   //function addtwonumbers(number1,number2){
     //  console.log(number1+number2);
   //}
    function addtwonumbers(number1,number2){
       
    //  let result=number1+number2
    //  return result
    return number1+number2
       
   }
   
    const result =addtwonumbers(5,5)
    // console.log(`result:`,result);


    function loginusermessage(username){
        if(username===undefined){
            console.log("please enter a username");

        }
        return `${username} just logged in`
    }

    // console.log(loginusermessage("gamma"));
    console.log(loginusermessage());

    function calculatecartprice( val1, val2, ...num1){
        return num1
    }

    console.log (calculatecartprice(3003,3948,43985,5398));

    const user={
        username:"hitesh",
        price:43897
    
    }

    function handleobject(anyobject){
        console.log(`username is${anyobject.username} and price is ${anyobject.price}`);

    }
    // handleobject(user)
    