
// function removeChar(str){
//     return str.substr(1, -1)
   
// };
// console.log(removeChar("country"))
// let str = "abcd"

// for(i in str){
//     let char = str[i]
//     console.log(char)
//   }



function position(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return Math(alphabet.indexOf(letter) + 1)
    
}
// console.log(position('l'))
// console.log(position('o'))
// console.log(position('v'))
// console.log(position('e'))
console.log(position('love'))