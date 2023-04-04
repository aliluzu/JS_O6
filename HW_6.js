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

function checkPalindrome(string) {

    // convert string to an array
    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}


checkPalindrome("eve");