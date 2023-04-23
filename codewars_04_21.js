// ================= reduce =============


// let array = [1, -3, -78, -45, -61, -100, -1, 2]
// let arr = [1, 2, 3, 4]

// let result = 0
/*
let sum = array.reduce((acc, currVal) => acc + currVal, 0) //0 : like default value
console.log(sum)           //output: 291
*/
// let multiply = arr.reduce((acc, currVal) => acc * currVal, 1) //0 : like default value
// console.log(multiply)    // otput: 24

// ---------- avarage ----------


// 1st example
// let sum = arr.reduce((acc, currVal, index, array) => acc + currVal / array.length, 0) //0 : like default value
// console.log(sum)



// 2nd example
// let sum = arr.reduce((acc, currVal, index, array) => acc + currVal, 0) / array.length //0 : like default value
// console.log(sum)


//--------------Max value ---------------
/*
let maximum = array.reduce((acc, currVal, index, array) => Math.max(acc, currVal), -Infinity)
console.log(maximum)

//2nd example

let max = array.reduce((acc, el) => acc < el ? el :  acc)
console.log(max)
*/
// --------------------- reduce and string ------

// let str = ['spring, ', 'summer', 'is', 'equal', 'happines']
// let result = str.reduce((acc, el, index, array) => acc + ' '+ el)
// console.log(result) // output: spring,  summer is equal happines

// ------------------------------------------------

let array = [[1, 3], [1, 2], [3, 2]]

let result = array.reduce((acc, el, index, array) => acc.concat(el), [])
console.log(result)    //otput: [ 1, 3, 1, 2, 3, 2 ]