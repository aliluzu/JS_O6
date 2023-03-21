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

for(let i = 1; i <= rows; i++){
    // str += ' '.repeat(rows - i)
    str += '\n'
    for(let space = 1; space <= rows - i; space++){
        str += " ";
    }
    for(let j = 1; j <= i; j++){
      str += j % 10
        
        
    }
    for(let k = i - 1; k >= 1; k --){
        str += k % 10
    }
}

for(let i = rows - 1; i >= 1; i--){
    str += '\n'
    for(let space = 1; space <= rows - i; space++){
        str += " ";
    }
    for(let j = 1 ; j <= i; j++){
        str += j % 10
    }
    for(let k = i - 1; k>= 1; k--){
        str += k % 10
    }
    str += '\n'  
}
console.log(str)


// let n = 10

// let str = '';

// for(let i = 1; i <= n; i ++){
//     str += ' '.repeat(n - i) //example 2:  of space 
//     for(let j = 1; j <= i; j++){
//         str += j % 10
//     }
//     for(let k = i - 1; k >= 1; k--){
//         str += k % 10
//     }
//     str += '\n'  
// }

// for(let i = n - 1; i >= 1; i--){
//     str += ' '.repeat(n - i);
//     for(let j = 1 ; j <= i; j++){
//         str += j % 10
//     }
//     for(let k = i - 1; k>= 1; k--){
//         str += k % 10
//     }
//     str += '\n'  
// }
// console.log(str)