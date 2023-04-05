// ========== recursion
/*
let count = 0

function recursion(){
    count++
    console.log(count)
    if(count > 50) return // here works like break
    recursion()
}
recursion

*/


// ---------------------------
// 1! = 1
// 2! - 1 * 2
// 3! = 1 * 2 * 3

/*
function factorial_1(n){
    let p = 1
    for (let i = 1; i <= n; i ++){
        p *= i
    }
    console.log(p)
}
factorial_1(3)


// ---------- example with recurtion
let result = 1
function recursion_2 (n){

    if (n == 0) return; // condition when funciton is finished
    result *= n
    recursion_2(n - 1)
}

recursion_2(5)
console.log("recursion: ", result)

// ---------------example 3

function factorial_3(n){
    return n == 1 ? 1 : n * factorial_3(n - 1)
}
console.log(factorial_3(5))

// 3! = 1 * 2 * 3
// n = 3 ->  3 * factorial(2) ->  3 * 2 -> 6
// n = 2 -> 2 * factorial(1) -> 2 * 1 -> 2
// n = 1 -> 1

*/

// ---------------number fibonacci-----------------
// 0, 1, 1 , 2, 3, 5, 8, 13, 21...
// 0  1  2   3  4  5  6  7    8 ----steps

// function fibonacci(n){
//     if(n == 0) return 0
//     if(n == 1) return 1
//     return fibonacci(n - 1) + fibonacci(n - 2)
// }
// console.log(fibonacci(7))



//---------------------- zamikaknie
// counter
/*
// let count = 0

function createCount() {
    let count = 0
    count ++
    console.log(count)
}
createCount()
createCount()
*/

// ************************

// (function hello() { 
//     console.log("Hello")
// })()

// -----------zamikanie(closure)--------------------
/*
function counter() {
    let count = 0

    return function createCount() {
        count++
        console.log(count)
    }
}
let counter_1 = counter()
let counter_2 = counter()
counter_1()
counter_1()
counter_1()
counter_1()
counter_1()
counter_1()
counter_2()
counter_2()
counter_2()

*/
//----------------- task from interview --------


/*
function generate(seed) {
    var private = seed;
    return function (param) {
      private += seed;
      return private + param;
    };
  }
  
  var a = generate(1);
  var b = generate(2);

//   a(1) + a(2) + b(3) + b(4);

// console.log(a(1))
// console.log(a(2))

console.log(a(1) + a(2))
*/

// I
//  I
//   I

//------------------------------ 1 
 /*
function createSteps(n){
    let str = ''
    for(let i  = 0; i <= n; i++){
        str += " ".repeat(i) + "I" + "\n"
    }
    return str;
}

console.log(createSteps(5))
*/

//------------------------------ 2
/*
function createSteps(n){
    let arr = []
    for(let i  = 0; i <= n; i++){
        arr.push( " ".repeat(i) + "I")
    }
    return arr;
}

console.log(createSteps(5).join('\n'))
*/

//------------------slice()-------------------------
/*
const arr = ['t', 'e', 's', 't']
// const arrNew = ["t", "e", "s", "t"]
// const arrNew = arr
const arrNew = arr.slice() //copy of "arr"
const arrNew = arr.slice(1, 3) // startIndex, lastIndex


arr[0] = 'T'
console.log(arr)
console.log(arrNew)  
*/

//------------------splice()-------------------------

const arr = ['t', 'e', 's', 't']
console.log(arr.splice(0, 1, 'T'))