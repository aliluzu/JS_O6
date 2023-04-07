/*

let string = "abcde"
console.log(string[2])

let array = ['a', 'b', 'c', 'd', 'e']
console.log(array[2])
// ----------------------------------------
string[2] = "1";      //can not change the element 
console.log(string)

array[2] = 'M'       // can change the element 
console.log(array)

*/


// ============ split(); join(); ==================

//split('') => return array of _all_ symbols

// let string = "Hello World QA JS ! " 

// console.log("original: ", string)

// console.log("split: ", string.split(" "))

// let stringNew = string.split("/")
// console.log('newsplit /: ', stringNew)

// let newArrayFromString = string.split("")
// console.log(newArrayFromString)


// == join convert the array to string by default. Split symbols by "," but do not chnage it
/*
let array = ['a', 'b', 'c', 1, 2, 3]
console.log(array)
 
console.log(array.join())                   // a,b,c,1,2,3

let newStringFromArray = array.join(" ")
console.log(newStringFromArray)           // a b c 1 2 3
*/


// ============ pop / push, shift/unshift ==================
/*
let letters = ['a', 'b', 'c', 'd', 'e']
console.log(letters)

letters.push('f', 's')
letters.push(1, 5)
letters.push(88)

let c = letters.push('g')  //return quantity of elements
console.log(letters)
console.log('quantity: ', c)

// ------------------------

let a5 = letters.pop()
let t = []
console.log(letters)

t.push(a5)
console.log("return deleted element: ", t)

a5 = letters.pop();
console.log("pop a5: ", letters)
console.log("a: ", a5)

t.push(a5)
console.log("push a5: ", t)
*/


// ========= unshift/ shift
/*
const bigLetters = ['A', 'B', 'C', 'D', 'E']

bigLetters.unshift('Z')

let d = bigLetters.unshift('X', 'Y', 'ali_test') //return quantity of elements
console.log('from d: ', bigLetters)
console.log('let d: ', d)

bigLetters.shift()
let z = bigLetters.shift()
console.log('shift:' , bigLetters)
console.log("return what was removed: ", z)

*/

// ========= concat


// let letters = ['a', 'b', 'c']
// let bigLeteres = ['A', 'B', 'C']
// let sumLetters = letters + ' ' + bigLeteres

// console.log(sumLetters)                // return string a,b,c A,B,C

// let girls = ["Cecillie", "Lone"]
// let boys = ["Emil", "Tobias", "Linus"]

// const myChildren = girls.concat(boys)
// console.log(myChildren)               // return array  //[ 'Cecillie', 'Lone', 'Emil', 'Tobias', 'Linus' ]




// ============ push() + spread operator ==================
/*
let arr1 = [5, 6, 7]
let arr2 = ["A", "B"]

console.log(...arr1)  // 5 6 7

const arr3 = [arr1, ...arr2]
const arr3_2 = [...arr1, ...arr2]
const arr4 = [1, 2, 3, 'a', 'b', 'c']
console.log("[arr1, ...arr2]: ", arr3)
console.log("[...arr1, ...arr2]: ", arr3_2)
console.log(arr4)
*/

// spread operator (...) ==================
/*
const numbers = [4, 8, 99, 7, 777, 54]
console.log(numbers)
console.log(...numbers)

console.log(Math.max(4, 8, 99, 9))

console.log(Math.max(numbers)) //NaN because Math doesnt work with array. Need to use (...)
console.log(Math.min(...numbers))
console.log(Math.max(...numbers))
*/

/*

let fruits = ['Banana', 'Orange', 'Apple', 'Mango']
console.log('fruits: ', fruits)
console.log("join: ", fruits.join())          //Banana,Orange,Apple,Mango
console.log("toString: ", fruits.toString()) //Banana,Orange,Apple,Mango

*/

// ============ string mrthods==================

// ===-------------------- .length

/*
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(txt.length)   // output: 26
*/


// ===-------------------- .slice()
//Slice out a portion of a string from position 7 to position 13(13 not included)
/*

let str = "Apple, .Banana, Kiwi";
// console.log(str.length)

let part = str.slice(7, 9);    // 7 - nachalo otkuda otrezat ; 9 gde zakoncit rezat
console.log("part: ", part)
console.log(part, "=", str)   // output: .B = Apple, .Banana, Kiwi

*/

//===----------------------------- replace()

//The replace() method replaces a specified value with another value in a string:

/*
let message = "Please 5 visit 5 Microsoft!";
//console.log(message)
let newText = message.replace(/microsoft/i, "Apple"); // i insetive to upper low cases
let newText2 = message.replaceAll("5", "9");
console.log(newText)
console.log(newText2)

*/

// == ---------------------------------charAt()

//Get the first character in a string:

// let text = "HELLO WORLD";
// let letter = text.charAt(0);
// console.log(letter, text[0])



//========================= repeat()
//Create copies of a text:

/*
let q = "Helo!"  //012
console.log(q.slice(1,3).repeat(4))

// Create copies of a text:

let text = "Hello world!";
let result = text.repeat(2);
console.log(result)
*/

// ================== trim()
//Remove spaces with trim():

/*
let text = "   Hello World!   .";
let result = text.trim();
console.log(text.toUpperCase())
console.log("default example: ", text)
console.log("trim: ", result)
*/

/*
console.log(String(7));                    // converts to string
let num = String(7)
let num2 = 5
console.log(num + num2)
*/

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[1];
// console.log(typeof fruits[1])





// let array = ["tail", "body", "head"]
// let array1 =  ["lower legs", "torso", "upper legs"]



// function fixTheMeerkat(arr) {
//     return arr.reverse()
// }
// console.log(fixTheMeerkat(array))
// console.log(fixTheMeerkat(array1))


// function fixTheMeerkat(arr) {
//     for(let i = 0; i < arr.length; i ++){
//         arr[i].split('').reverse().join('')
//     }
//     return arr
// }
// console.log(fixTheMeerkat(array))

// let num = 35231
// function digitize(n) {
//     return  n.toString().split('').reverse().map(Number)
// }
// console.log(digitize(num))



// == ---------------------------------compare arrays ------------------
/*
let arr = [1, 2]
let arr1 = ["a", "b"]

console.log(arr == arr1) //false
console.log(arr > arr1)//false
console.log(arr1 < arr)//false

*/

const a1 = [1, 2, 7]
const b1 = [1, 2, 5]
const c1 = [1, 2, 7]

// 1st example ------------------------
console.log(JSON.stringify(a1) == JSON.stringify(b1)) //compare string  -> /output: false
console.log(JSON.stringify(a1) == JSON.stringify(c1)) //output: true

// 2nd example ------------------------
console.log(b1.toString() === a1.toString()) //output: false