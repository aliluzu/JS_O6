// =================== 1st Example ===========

// let  myFunction = (a, b) => {
//     return a * b 
// }

// =================== 2nd Example ===========

// let myFunction = (a, b) => a * b


// ====== A function woth one argument  ======

// function square(a) {
//     return a * a 
// }

// -------- 2nd Example -----------

// let square = (a) => {
//     return a * a
// }

// -------- 3rd Example -----------
// let square = (a) => a * a
// // -----------OR ------------------
// let square = a => a * a 

// ==================== create a function with weigth and height => calculate BMI

// let BMI = (weight, height) => +(weight / height ** 2).toFixed(2)
// console.log(BMI(59, 1.65))

// ============ Convert  fahrenheit to celsius =========
// the formula:
// C = (F - 32) * 5/9

let celsius = F => +(( F - 32) * 5 / 9).toFixed(1)
console.log(celsius(65)) 