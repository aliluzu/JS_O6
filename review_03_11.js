// ============Switch ============

/*
let num1 = 5;

switch(num1){
    case 1:
        console.log('One')
        break;
    case 2:
        console.log('Two')
        break;
    case 3:
        console.log('Three')
        break;
    case 4:
        console.log('Four')
        break;
    case 2 + 5:
        console.log('Five')
        break;
    default:
        console.log('Something else')
}
*/

// ============Exampele 1 ============


/*
let month = 4;

switch(month){
    case 1:
    case 2:
    case 12:
         console.log('Winter')
         break;
    case 3:
    case 4:
    case 5:
        console.log('Spring')
        break;
    default:
        console.log('This month is not existing')
}

*/

// ============Exampele 2 ============

/*

let month = 6;

switch(true){
    case month == 1 || month == 2 || month == 12:
        console.log('Winter')
        break;
    case month == 3 || month == 4 || month == 5:
        console.log('Spring')
        break;
    case month == 9 || month == 10 || month == 11:
        console.log('Fall')
        break;
    default:
        console.log('Summer')
}

*/

// ============Exampele 3 ============

/*

let month = 12;

switch(true){
    case month == 1 || month == 2 || month == 12:
        let message = "Winter"
        console.log(message)
        break;
    default:
        console.log('Summer')
}

*/

// ============Exampele 4 ============

/*

let num1 = 4
let num2 = 0
let operator = " / "

switch(operator){
    case "+":
        console.log(num1 + num2)
        break;
    case " - ":
        console.log(num1 - num2)
        break;
    case " / ":
        num2 == 0 ? console.log(' Not valid num2') : console.log(num1 / num2)
        break;
    default:
        console.log('Please enter a valid operator')
}

*/

// ============Array ============
/*
let str = "Hello world";

console.log(str.length);
console.log(str[6]);
*/


/*

let myArr = [];
const arr = new Array();
*/


/*
let myArr = [1, 2, 3 , 'str', true, false, undefined, {q: 19}, [69, 33, 99]]
console.log(myArr)
console.log(myArr.length)
console.log(myArr[8][0], myArr[7])
*/

/*
const myArr = [1, 2, true, undefined, null]
console.log(myArr[3])

myArr[3] = 675;
console.log(myArr )
*/


// ============Loop ============

let str = 'Hello';

let index = 0;
// console.log(str[index]);

/*
while(index < str.length){
    console.log(str[index]);
    index++; 
}
console.log('End')

console.log(" ")
*?

/*
if (index <= 10){
    console.log(str[index]);
    index++; 
}
console.log('End')
*/

/*
while(true){
    console.log(index);
    index++; 
}
*/

/*
do{
    console.log(index)
    index++;
}while(index <= 5)
console.log('End')
*/

/*
for(; index <= 5;){
    console.log(index);
    index++
}
console.log('End')
*/

/*
for(let index = 0; index <= 5;index++){
    console.log(index);
    
}
console.log('End')
*/

for(let index = 0; index < str.length; index++){
    console.log(index);
    
}
console.log('End')

/*
let name;
do{
    name  =prompt('Please enter your name:')
}while(name == 'admin')
alert('HELLO!')
*/