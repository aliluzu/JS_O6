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

let rows = 19;
let str = "";

for(let i = 1; i <= rows; i++){
    str += '\n'
    for(let space = 1; space <= rows - i; space++){
        str += " ";
    }
    for(let j = 1; j <= i; j ++){
        str += j
    }
    for(let k = i - 1; k >= i - 1; k --){
        str += k
    }
}
console.log(str)

// for(let i  = 1; i <= rows; i++){
//   for(let space = 1; space <= rows; space++){
//     pattern += " ";
//   }
//   for(let j = 1; j <= i; j++){
//     pattern += j
//   }
//   pattern += "\n"
// }
// console.log(pattern)