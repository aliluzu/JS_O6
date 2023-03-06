/* 1.1 Write the programm where you should confirm the vocation
depending on the month. If the month is "July" or "August",
then the program should show - 'approved', if other months,
then - 'denied'
*/


let vacationMonth = prompt("Enter the month")

if (vacationMonth === "July" || vacationMonth === "August"){
    alert("Your vacation is Approved");
}else{
    alert("Your vacation is Denied")
}

/*
1.2 Write a simple calculator (*, /, +, -). Check your code for exception coverage for arithmetic operations.

You should have two variables for the original numbers and one for the operator. Depending on the operator, 
one or another arithmetic operation should take place and the result should be displayed on the console.
*/
let mathOpe =  prompt("Choose the follow operator: '+', '-', '*', '/', ")
let numebr1 = Number(prompt("Enter 1st number"));
let number2 = Number(prompt("Enter 2nd number"));


if(mathOpe === '+'){
    result = numebr1 + number2
    alert(`${result}`);
}else if(mathOpe === "-"){
    result = numebr1 - number2
    alert(`${result}`);
}else if(mathOpe === '*'){
    result = numebr1 * number2
    alert(`${result}`);
}else if(mathOpe === '/' && number2 != 0){
    result = numebr1 / number2
    alert(` ${result}`);
}else if(mathOpe === '/' && number2 == 0){
    alert("cannot divide by zero")
}else{
    alert("Invalid operator")
}

/**
 
«Улитка ползёт вверх по стене высотой 5 метров.
 Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. 
 За сколько дней она доползёт до вершины стены.»
 */

 let h = 5;
 let day = 3;
 let nigth = 2

 let x = day - nigth;
 let day_left  = h - x;
 alert(`${day_left} days left to reach the top `);