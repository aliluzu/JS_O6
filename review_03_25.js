/*
let str = 'Hello'

function printName(){
    str = 'Hey' //overwritten let str : Hello -> Hey 
    return name() + "Java" + ' ' + str;

    function name(){
        return "Hi"
    }
}
console.log(printName())
console.log(str) //output: Hey

*/
// ---------------------------------------------------------------------------------
/*
let str = 'Hello'

function printName(){
    let str = 'Hey' // but if add 'let str' not simple 'str' like above these properties work separate
    return name() + "Java" + ' ' + str;

    function name(){
        return "Hi"
    }
}
console.log(printName())
console.log(str) // output: Hello
*/

// ------------------------------removed return-----------------------------------
/*
let str = 'Hello'

function printName(){
    let str = 'Hey' 
    console.log( name() + "Java" + ' ' + str)

    function name(){
        return "Hi"
    }
}
printName()    // removed console.log due to 38 str
*/

// ------------------------------3 function-----------------------------------
 /*
let str = 'Hello'

function printName(a, b){
   str = 'Hey' 
    return a +  b + name()                 //step 2: 10 + 70 + Hi

    function name(){
        return "Hi"                       // Step 3 
    }
}

function sum(num1, num2){                // Step 1: 20 + 50 = 70
    return num1 + num2
}

console.log(printName(10, sum(20, 50))) // step 4: 10 + 70  + Hi
*/


// ------------------------------ -----------------------------------

// let str = "Hello"

// function printInfo(){
//     console.log("1")
//     console.log("2")
//     console.log("3")
//     console.log("4")
//     console.log("5")
//     console.log("----")
// }
// printInfo()
// printInfo()
// printInfo()

// ------------------------------ -----------------------------------

// let printName = function(name){
//     return `Hello ${name}`
// }
// console.log(printName('Alina'))

// ------------------------------ -----------------------------------

// let printName = name => `Hello ${name}`
// console.log(printName('Alina'))


// ------------------------------ -----------------------------------

// let printName = (name) => {
//     let greeting = `Hello ${name}`
//     return 'Good morning ' + greeting
// }
// console.log(printName("Alina"))

// ------------------------------Only for 1 row -----------------------------------

// const sum = (num1, num2) =>  `${num1} + ${num2} = ${num1 + num2}`;
// console.log(sum(10, 20))


// ------------------------------ -----------------------------------