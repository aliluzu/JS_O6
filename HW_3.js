// 1. Use SWITCH 
// Write a simple calculator (*, /, +, -). Check your code for exception coverage for arithmetic operations.

// let num1 = 8.99;
// let num2 = 2
// let operator = "/";

// switch(operator){
//     case "+":
//         console.log(num1 + num2)
//         break;
//     case "-":
//         console.log(num1 - num2)
//         break;
//     case "*":
//         console.log(num1 * num2)
//         break;
//     case "/":
//     case num2 == 0:
//         console.log(num1 / num2)
//         console.log("cannot divide by zero")
//         break;
//     default:
//         console.log('Please enter a valid operator')

// }


// 2.Using loop "for" print event numbers from 2 to 10

/*
for(let i  = 0; i <= 10; i ++){
    if(i % 2 === 0 )
    console.log(i)
}
*/

// 3.У вас есть массив со скобками, предположим 
// [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).

/*
let arr = [ '(', ')', '(', ')', ')']
let count = 0;
for(let i = 0; i < arr.length; i ++){
    if( '(', ')', '(', ')', ')'){
        console.log(i + "  " +"Element with full brackets"  +  arr[i])
    }else{
        console.log("Element doesn't have open or close brackets")
    }

}
*/
// let arr = [ '(', ')', '(', ')', ')']
// let count = 0
// for(let i =0; i < arr.length; i ++){
//     if(arr[i] == '('){
//        count ++
//     }else if(arr[i] == ')'){
//         count --
//     }
//     if(count == 0){
//         console.log( i + ": " + "The open bracket has closed pair ")
//     }else{
//         console.log(i + ": " + "The open bracket doesn't have closed pair")
//     }
// }

/*
let array = [ '(', ')', '(', ')', ')'];
let counter = 0;
for(let i = 0; i < array.length; i ++) {
  if(array[i] == '(') {
    counter++
  } else if(array[i] == ')') {
    counter--
  }
}
if(counter == 0) {
  console.log("у каждой скобки есть пара");
} else if (counter < 0 || counter > 0) {
  console.log("скобочка осталась без пары...");
}
*/

/*
let array = [ '(', ')', '(', ')', ')'];
let counter = 0;
for(let i = 0; i < array.length; i ++) {
  if(array[i] == '(') {
    counter++
  } else if(array[i] == ')') {
    counter--
  }
}
if(counter == 0) {
  console.log("у каждой скобки есть пара");
} else if (counter < 0 || counter > 0) {
  console.log("скобочка осталась без пары...");
}
*/

// 4. 
//      *
//     ***
//    *****
//   ******* 
//  *********
/*
*/
let rows = 5;

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {  //print rows
   // Inner Loop - I -> prints spaces
   for (let space = 1; space <= rows - n; space++) {
      pattern += " ";
   }

   // Inner Loop - II -> prints stars 
   for (let num = 1; num <= 2 * n - 1; num++) { // print columns 
      pattern += "*";
      
   }

   pattern += "\n";
}
console.log(pattern);