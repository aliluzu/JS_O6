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

/*
function sum(a, b = 7){
    let result = a + b
    return result
}

console.log(sum (10))
*/

/*
function sum(a = 5, b =7){
    result = a + b
    return result
}
console.log(sum)

function print(a, b){
    let sum2 = sum(2,2)
    console.log(a + sum2)
    return sum2

}
console.log(print())
*/


function showMessage(name){ //local
    return name = 'Aliz'
}
console.log(showMessage())