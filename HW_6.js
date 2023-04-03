// 1. Задача про Палиндром. 
// Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
// Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.


function checkPalindrome(str){
    var len = str.length
    for(let i = 0; i < len / 2; i ++){
        if(str[i] !== str[len - 1 - i])
        return "It is not palindrome"
    }
    return "It is a palindrome"
}
console.log(checkPalindrome(/Anna/g))
console.log(checkPalindrome(/eVE/g))