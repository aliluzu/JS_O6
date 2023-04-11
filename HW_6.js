// 1. Задача про Палиндром. 
// Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
// Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.

// --------------------- 1 variant

// function checkPalindrome(str) {
//     var len = str.length
//     for (let i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i])
//             return "It is not palindrome"
//     }
//     return "It is a palindrome"
// }
// console.log(checkPalindrome(/Anna/g))
// console.log(checkPalindrome(/eVE/g))

// --------------------- 2 variant

// function checkPalindrome_str_arr(string){
//     const reverseString = string.split('').reverse().join('');
//     if(string == reverseString) {
//         return 'It is a palindrome';
//     }
//     else {
//         return'It is not a palindrome';
//     }
// }
// console.log(checkPalindrome_str_arr(/eVE/g))

// program to check if the string is palindrome or not
/*
function checkPalindrome(string) {

    const reverseString = string.split('').reverse().join('');

    // // convert string to an array
    // const arrayValues = string.split('');               // ["h", "e", "l", "l", "o"] converts the string into individual array characters.

    // // reverse the array values
    // const reverseArrayValues = arrayValues.reverse();  // ["o", "l", "l", "e", "h"]   The reverse() method

    // // convert array to string
    // const reverseString = reverseArrayValues.join('');  // "olleh"  all the elements of an array into a string

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}


checkPalindrome("eve");
*/

// 2. Задача с интервью*
// У вас есть массив с тремя видами скобок, предположим 
// [ ‘{‘, ‘)’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘)’] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, все ли скобки являются парными  в правильной последовательности (открывающая и затем закрывающая). Также, скобки могут быть вложенными, но тем не менее, если последовательность соблюдена, то они считаются парными.

// let myArr = [ ')', '{', '(', '(', ')', ')', '}', '[', ']', '(' ]
// let myArr = [ '{', '(', '(', ')', ')', '}', '[', ']' ] 
let myArr = [ '{', '(', '(', ')', ')', '}', '[', '[', ')' ] 

let test = myArr.reverse()
const test1 = myArr.indexOf(')')
// console.log(test)
console.log(JSON.stringify(myArr) == JSON.stringify(test))
console.log(JSON.stringify(myArr))
console.log(JSON.stringify(test))