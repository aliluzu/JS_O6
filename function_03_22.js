// let arr = ['Tom', 'green', 55, 'apple', 43, 88, 'pear', 'red', 1];

// find the number
/*
let newArr = []

// ----------- example with loop--------------

for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] == 'number'){
        newArr.push(arr[i])
    }
}
console.log(newArr)
*/

// ----------- example with function--------------
// let fruits = ['apple', 9, 'grape', 100, 'banana', 89]

// function showMessage(){
//     console.log('Hello world')
// }

// // ------- 1st example --------------
// /*
// function createArrOfNumbers(array) {
//     let newArr = []
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] == 'number') {
//             newArr.push(array[i])
//         }
//     }
//     showMessage()
//     return newArr
//     // showMessage() // this part won't display due to return. After "return" the code is not running
    
// }
// */
// // ------- 2st example --------------

// function createArrOfNumbers(array) {
//     let newArr = []
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] == 'number') {
//             if(array[i] == 88){
//                 // break; // [55, 43]
//                 // continue //skip 88 -> [55, 43, 1]
//             }
//             newArr.push(array[i])
            
//         }
//     }
//     return newArr
// }
// console.log(createArrOfNumbers(arr))

// ----------- example 1st-----
/*
function sumNumber(a, b, c){
    
    return a + b + c
}
console.log(sumNumber(2, 4, 5))
*/

// ----------- example 2nd-----
/*
function sumNumber(a, b, c){
    let result = a + b + c
    return result
}
console.log(sumNumber(2, 4, 5))
*/

// ----------- example 3rd-----
/*
function sumNumber(a, b, c = 0){
    let result = a + b + c
    return result
}
console.log(sumNumber('string', 4))
*/

// ----------- example 4 --------
/*
let addNum = function sumNumber(a, b = 1, c = 5.5){
    return a + b + c
}
console.log(addNum(5))
*/
// ----------- example 5 --------
/*
let sumNum = (number1, number2, number3) => number1 + number2 + number3
let result = sumNum(3, 10, 2)
console.log(sumNum(3, 10, 2))
console.log(result)
*/
// ----------- example 6 --------

let arr = ['Tom', 'green', 55, 'apple', 43, 88, 'pear', 'red', 1];

// =============== 1st example ================
/*
function indexOfElement(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] == 88){
            return i
        }
    }
}
console.log(indexOfElement(arr))
*/

// =============== 2nd example ================

function indexOfElement(array, num){
    for(let i = 0; i < array.length; i++){
        if(array[i] === num){
            return i
        }
    }
}
console.log(indexOfElement(arr, 88))