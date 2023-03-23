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
/*
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
    // str += ' '.repeat(rows - i);
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
    // str += '\n'  
}
console.log(str)
*/

// 2.Print
//     *
//    ***
//   *****
//  *******
// *********

/*
let rows = 5;

let str = ""

for(let i = 1; i <= rows; i ++){

    for (let space = 1; space <= rows - i; space++) {
        str += " ";
     }
    for(let j = 1; j <= 2 * i - 1; j++){
        str+= "*"
    }
    str += "\n"
}
console.log(str)
*/


// 3.Print
// 1 
// 2 6 
// 3 7 10 
// 4 8 11 13 
// 5 9 12 14 15



let str = ""
let rows = 5                                             // 1 lopp                           2 loop                                    3 lopp
                                           

for(let i = 1; i <= rows; i++){                          //i = 1                            i = 2                                     i = 3
    let num = i                                          // num = 1                         num = 2                                   num = 3
    for(let j = 1; j <= i ; j++){                       // j = 1                            j = 1, 2                                  j = 1, 2,
        str += num + " "                                // str += num(1) + space            str += (2 + space)
        num = num + (rows - j)                          // num = 1 + (5-1)                  num = 2 + (5-1)                          str += (3 + space)
    }                                                                                                                               // num = 3 + (5 - 1)
    str += "\n"                                                                            //str += (2+space) + (6+space)           str += (3 + space) + (7 + space)
                                                                                                                                    // num = 7 + (5 - 2)
                                                                                                                                   // str+= (3 + psace) + (7 + space) + (10 + space)
}
console.log(str)
