/*

let login = true

let course1 = 'js'
let course2 = 'java'
let course = course1
let region = 'Poland'


// Example of unreadable code


if (login == true) {
    if (course == course1) {
        console.log('Welcome!')
        if (region != 'USA') {
            console.log('Wake up early!')
        }
    } else console.log('Go to Java')
} else {
    console.log('Login is not correct')
}
*/

// ================= SWITCH ================

/*
let day = 3;
switch(day){
    case 2:
        console.log("Tuesday");
        console.log("OK")
        break;
    
    case 3:
        console.log("Wednesday");
        console.log("OK")
        break;
    case 4:
        console.log("Thursday");
        console.log("OK")
        break;
    case 5:
        console.log("Friday");
        console.log("OK")
        break;
    default:
        console.log("Another day")
}
*/

// ================= STRING ================

/*
let phrase = "Hello world!"
let space = " ";

// phrase.length

console.log(phrase.length)
console.log(space.length)
*/

/*
// index;

let phrase = "Hello world!"
let space = "  .9%";

console.log(phrase[11])
console.log(space[0])
console.log(phrase[7])
console.log(phrase[0])

console.log(phrase.toLowerCase())
console.log(phrase.toUpperCase())

*/

// ================= Arrays ================

/*
let arr = [];
console.log(typeof arr);

const arr1 = ['a', 'b'];
console.log(arr1);

let arr2 = ['ok', 'pine', 'oak', 'aspeon']
console.log(arr2);

let arr3 = [1, 2, 3, 4]
console.log(arr3);


// variables

let five = 5
let six =6
let seven = "seven"

const diffTypes = [null, 2, true, undefined, five, [1,2,3], arr3];
console.log(diffTypes);
*/


// arr[index]; // indesx starts from 0
//arr[arr.length - 1]; // accepts zero and positive index
// arr.at(index)    // accepts negative index


/*
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
// index:         0     1   2    3     4   5    6
// or                                 -3  -2   -1

console.log(letters.length); //7
console.log(letters[0]); //a 
console.log(letters[letters.length - 1]); //g
console.log(letters.at(-2)); //2
*/

// ======== for loop ==============

// for (let i = 0; i < 3; i++){
//     console.log(i)
// }

// ********* repeat string *******

/*
let str1 = "Hello"
let newStr = "";
for(let i = 0; i < 7; i ++){
    newStr += str1
    console.log(newStr)
}


let str2 = "test"
let newStr1 = "";
for(let i = 0; i < 7; i ++){

    console.log(str2 + i)
}
// console.log(newStr)
*/

// ********* find sum *******

/*
console.log('Sum every numbers')
let sum = 0;
for (let i =1; i <= 10; i++){
    sum +=i;
    console.log(sum)
}

console.log('')
console.log('Sum')
let sum1 = 0;
for (let i =1; i <= 10; i++){
    sum1 +=i;
}
console.log(sum1)
*/

// --------------------exponentiate---------

// let num = 5
// let result = 1
// for(let i = 1; i <= 3; i++){
//     result = result * num;
//     console.log(result)
// }

// let str = "Hello!"
// let result1
// for(let i = 1; i <= str.length; i+=2){
//     result1 = i
//     console.log(result1)
// }

// --------------------change string---------

// function howManydays(month){
//     var days;
//     switch (month){
//         case 4: case 6: case 9: case 11:
//         days = 30; break;
//         case 2: 
//         days = 28; break;
//         default:
//         days = 31;
//     }
//     return days;
//   }
  
//   console.log(howManydays(3))


let arrDolls = ["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]

// console.log(arrDolls.length)
/*
function grabDoll(dolls){
    var bag=[];
    for(let i = 0; i < dolls.length; i ++){
      if(dolls[i] === "Hello Kitty" ||  dolls[i] === "Barbie doll"){
        bag.push(dolls[i])
      }else{
        continue
      }if(bag.length == 3){
        break
      }
    }
    
    return bag;
  }

  console.log(grabDoll(arrDolls))
*/

//   ======================================
let obj = {Our:"earth",is:"a",beautyful:"world"}

// for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
//   }

function giveMeFive(obj){
    var array = [];
    for (const [key, value] of Object.entries(obj)) {
        if(key.length == 5 ){
            array.push(`${key}`)
        }
        if(value.length == 5){
            array.push(`${value}`)
        }
        
    }
    return array
  ;}