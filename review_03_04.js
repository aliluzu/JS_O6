/*let num = 1;
console.log(-num);
*/

/*
let num1 = "1";
let num2 = "5";
// console.log(num1 + num2); //string
console.log(+num1 + +num2); // number
console.log(Number(num1) + Number(num2)); // number
*/

/*
let num; // by default undifined if there is no properties

console.log(Number(num)); //undifined --> NaN
*/

//======================
/*
let num1 = null;
console.log(Number(num1)); // null --> 0


let test =  true;
console.log(Number(test)); //true -->1

let test1=  false;
console.log(Number(test1)); //false -->0

let test2 = 67584756487;
console.log(String(test));

let bl = 0;
console.log(Boolean(bl));
// 0 --> false

let bl1 = " ";
console.log(Boolean(bl1));
// string --> false

let bl2 = null;
console.log(Boolean(bl2));
// null --> false

//Boolean()
// 0, null, undifined, '' , NaN --> false
// other --> true
*/

/*
let numb = 5;

if (numb >= 7 && numb <= 10){
    console.log("True");
}else {
    console.log("False");
}
*/

/*
let num = 100;
if (num <= 7 || num >= 10 || num != 100){
    console.log("True");
}else {
    console.log("False");
}// funktion reads from left to rigth . If the fist find true it displays true
*/


// ==============================

// console.log(1 && null && 4);

let test = 2;
let test2 = 3

if (test < test2){
    console.log(`${test} < ${test2}`);
}else if (test > test2){
    console.log(`${test} > ${test2}`);
}else {
    console.log(`${test} = ${test2}`)
}