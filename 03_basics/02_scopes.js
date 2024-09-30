
let a=300
if (true){
    let a=10
const b=20
// console.log("inner",a);
}

//  console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "gamma"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

if (true) {
    const username ="gamma"
    if (username === "gamma"){
        const website = " youtube"
        // console.log(username+website);
    }

    // console.log(website);

}

// console.log(username);


// ****************** intresting ***************8


function addone(num){
    return num +1
}

addone(6)


const addtwo = function(num){
    return num + 2
}

addtwo(6)