// 1.
//          1
//         121
//        12321
//       1234321
//      123454321
//     12345654321
//    1234567654321
//   123456787654321
//  12345678987654321
// 1234567890987654321
//  12345678987654321
//   123456787654321
//    1234567654321
//     12345654321
//      123454321
//       1234321
//        12321
//         121
//          1

let rows = 10;
let str = "";

// for(let i = 1; i <= rows; i++){
//     str += '\n'
//     for(let space = 1; space <= rows - i; space++){
//         str += " ";
//     }
//     for(let j = 1; j <= i; j++){
//         if (j % 10 === 0 && i - j + 1 === 10){
//             str+= "0"
//         }else{
//             str += j % 10
//         }
        
//     }
//     for(let k = i - 1; k > 0; k --){
//         str += k 
//     }
// }

for(let i = 1; i <= rows; i++){
    for(let space = 1; space <= rows - 1; space++){
        str += " ";
    }
    for (let j = 0; j < 2 * (rows-i)-1; j++) {
        str += j;
    }
    // for(let k = i - 1; k >= 1; k--){
    //     str += k
    // }
    str = '\n'
}
console.log(str)

// let rows = 9;
// let str = "";

// for (let i = rows; i >= 1; i--) {
//     // add leading spaces to the string
//     str += " ".repeat(2 * (rows - i));
    
//     // add the first half of the sequence to the string
    // for (let j = 1; j <= i; j++) {
    //     str += j;
    // }
    
//     // add the second half of the sequence to the string
//     for (let j = i - 1; j >= 1; j--) {
//         str += j;
//     }
    
//     // add a newline character to the string
//     str += "\n";
// }

// // add the last line to the string separately
// str += " ".repeat(17) + "1\n";

// console.log(str); // print the final string to the console