// ================= reduce =============


let array = [1, 3, 78, 45, 61, 100, 1, 2]
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let result = 0

let sum = array.reduce((acc, currVal) => acc + currVal, 0) //0 : like default value
console.log(sum)           //output: 291

let multiply = arr.reduce((acc, currVal) => acc * currVal, 1) //0 : like default value
console.log(multiply)    // otput: 362880

