
// ----------------every()---------------------
/*
const arr = [2, 6, 3, 28, 9]
console.log(arr.every(el => el > 0)) //output: true ->  kazdij iz elementov dolzin sootvestvovat usloviju

console.log(arr.every((el, i) =>  i % 2 == 0 ? el > 0: el > 9))



// ----------------some()-----------------------
console.log(arr.some((el, i) =>  i % 2 == 0 ? el > 5: el > 5)) // output: true

console.log(arr.some(el => el > 5)) // output: true


// ----------------forEach()------------- method nothing return
console.log(arr.forEach(el => el > 3))

const newArr = []
arr.forEach(el => el > 3 ? newArr.push(el) : '')
console.log(newArr)

*/
// ----------------sort()----------------------------
/*
const arr = [2, 6, 3, 28, 9, 56, 103, 1, 1001, 3940]

const arr1 = ["a", "bb", "z", "c", "w", "t"]
const arr2 = ["a", "bb", "z", "c", "w", "t", "A", "C"]
const arrNew = [...arr, ...arr1]
//if you need to save the original array you shoul create a copy of array

arr.sort()  //sort by aplphabet, because method is looking like string
arr1.sort() 
arr2.sort().reverse()
arrNew.sort()

console.log(arr)
console.log(arr1)      // [ 'a', 'bb', 'c', 't', 'w', 'z' ]
console.log(arr2)     // [ 'z', 'w', 't', 'c', 'bb', 'a' ]
console.log(arrNew)  // [1,   1001, 103, 2,   28, 3,   3940, 56,  6,   9, 'a', 'bb', 'c', 't', 'w','z']
*/

// ----------------sort()----------------------------\
/*
const arr = [2, 6, 3, 28, 9, 56, 103, 1, 1001, 3940]

const arr1 = [2, 6, 3, 28, 9, 56, 103, 1, 1001, 3940]

const arrNew = [
    [1, 3], 
    [2, 2], 
    [1, 2],
    [3, 4], 
    [1, 0]
]

arr.sort((num1, num2) => num1 - num2) //callback function num1=min elemnt, num2 = max element
arr1.sort((num1, num2) => num2 - num1) 
arrNew.sort(([a, b], [c, d] )=> a - c).sort()

console.log(arr)
console.log(arr1)
console.log(arrNew) // [ [ 1, 0 ], [ 1, 2 ], [ 1, 3 ], [ 2, 2 ], [ 3, 4 ] ]

*/

// ----------------map()------------------------------return a new array
/*
const arr = [2, 6, 3, 27, 9, 56, 103, 1, 1001, 3940]

let arrNew = arr.map(el => el ** 2)
let arrNew1 = arr.map(el => el % 3 == 0 ? el / 3 : el)


console.log(arrNew)
console.log(arrNew1)


//---------------------------------------example 1
let arrNew2 = arr.map((el, i) => i % 3 == 0 ? el % 3 == 0 ? el / 3 : el : el)
//---------------------------------------example 2

// const callback = (el, i) => {
//     if (i % 3 === 0) {
//         if (el % 3 == 0) {
//             return el / 3
//         }
//         return el
//     } else {
//         return el
//     }
// }


const callback = (el, i) => {
    if (i % 3 === 0 && el % 3 == 0) {
        return el / 3
    } 
    return el
}

let arrNewCallBack = arr.map(callback)


//---------------------------------------example 3
let arrNew3 = arr.map((el, i) => {
    if (i % 3 === 0 && el % 3 == 0) {
        return el / 3
    } 
    return el
})

console.log("arrNewCallBack:", arrNewCallBack)
console.log("arrNew2: ", arrNew2)
console.log("arrNew3: ", arrNew3)
*/

// ----------------reduce()------------------------------
const arr = [2, 6, 3, 5, 9]

const result = arr.reduce((acc, el, i, arr) => acc + el,0)
// acc = 0
// 2 Steps: el = 2, acc = 0 + 2 = 2
// 3 Steps: el = 6, acc = 2 + 6 = 8
// 4Steps: el  = 3, acc = 8 + 2 = 11

console.log(result)