// let a = 2
// let b = "3"
// let mySum = a + b
// console.log(mySum)

// -------------------------
// let a = 7
// let b = 2 

// // 7-2 = 5
// // 5 - 2 = 3
// // 3-2 = 1 

// let myModuls = a % b;
// console.log(myModuls)

// -------------------------

// increment and decrement (++, --)

// let myVariable = 10

// console.log(myVariable)
// console.log(++myVariable)

// document.write(myVariable++, "<br>")
// document.write(myVariable--)

// console.log(--myVariable)

// -------------------------

// let a  = "5";
// let b = -10;
// let c = "c";
// let C = "C";
// let d = "0";

// console.log(a)
// console.log(a == 5); //true
// console.log(a === 5); //false
// console.log(b)
// console.log(b != "-10") //false
// console.log(b !== "-10"); //true
// console.log(c == C);//false
// console.log(c === "c"); //true

// let bool = (b != "-10")
// console.log(`Answer: ${bool}`)

// ----------------------------------------
// let massKg = 70;

// console.log(massKg > 50 || massKg > 90); //true
// console.log(!(massKg < 50 || massKg > 60)); // false

// ----------------------------------------
/*
console.log(true && true); //true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
*/

// priorety && has more than || that's why && will run early

// ----------------------------------------

let login = false;
let pswrd = false; 

/*
if(login && pswrd){
    console.log("Click Submit");
}else{
    console.log("Your password is wrong");
}
*/

// if(login && pswrd){
//     console.log("Click Submit");
// }else if (pswrd != true && login ){
//     console.log("Your password is wrong");
// }else if (login != true && pswrd){
//     console.log("Your password is wrong");
// }
// else(
//      console.log("Please contact support")
// )


// ---------alert () and promt () ---------

// alert("Welcome to our site!")

let inputName = prompt("Please, enter your name!")
console.log(`Hello ${inputName}`)