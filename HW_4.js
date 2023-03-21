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
    str += '\n'
    for(let space = 1; space <= rows - i; space++){
        str += " ";
    }
    for(let j = 1; j <= i; j++){
        if (j % 10 === 0 && i - j + 1 === 10){
            str+= "0"
        }else{
            str += j % 10
        }
        
    }
    for(let k = i - 1; k > 0; k --){
        str += k 
    }
}

for(let i  = 1; i <= 1; i ++){
    for(let space = 1; space <= rows; space++){
        str += " ";
    }
    for(let j = 0; j < 2 * (rows-i); j++){
        str += " ";
    }
    // for(let k = i - 1; k > 0; k --){
    //     str += k 
    // }
}
console.log(str)

