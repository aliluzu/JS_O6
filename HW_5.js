// 1. re-Write a simple calculator (*, /, +, -) by using function
/*
const sum = (num1, num2) => `Sum = ${num1 + num2}`

const substr = (num1, num2) => `Subtractions =  ${num1 - num2}`

const multip = (num1, num2) => `Multiplying = ${num1 * num2}`

function devide(num1, num2){
    if(num2 != 0 ){
        return `Division = ${num1 / num2}`
    }else{
        return "Cannot divide by zero"
    }
}

function result(num1, num2, callback){
    return callback(num1, num2)
}

console.log(result(10, 20, sum))

console.log(result(10, 20, substr))

console.log(result(15, 15, multip))

console.log(result(10, 0, devide))
*/

// 2. Write a function that creates and prints a custom greeting with the name you pass to the function.

function greeting(message, name, lastmessage){
    return message + name + lastmessage
}

console.log(greeting('Good morning ', "Alina! ", 'Your Frape is done'))
