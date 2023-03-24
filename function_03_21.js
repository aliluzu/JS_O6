//=================== Options 1: function delaration =========

// function name(param1, param2){
//     code block
// }

//=================== Options 2: function expression ========

// let name = function(param1, ...){
//     statmenets
//     return expression;
// }

//=================== Options 3: arrow function ========
// let name =(arg1, arg2) => expression

// print("Hi")
/*
function sum(a, b){
    let result =  a + b
    console.log (result)
}

sum(3,6)
*/

//------2nd example
 /*
function sum(a, b){
    return a + b
}
console.log(sum(3, 6))
*/

function sum(a, b = 7){
    let result = a + b
    return result
}

console.log(sum (10))