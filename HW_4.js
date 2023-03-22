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


let rows = 5
let str = ""

for(let i = 1; i <= rows; i++){
    let num = i
    for(let j = 1; j <= i + 1; j++){
        str += num + " "
        num = num + (rows - j)
    }
    str += "\n"
    
}
console.log(str)

// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     let count = i;
//     for (let j = 1; j <= i; j++) {
//       row += count + " ";
//       count += (5 - j);
//     }
//     console.log(row);
//   }