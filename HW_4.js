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

/*

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

*/

// 4. Продумайте код для создания сэндвичей с 3-мя начинками
//  и выставите цену в зависимости от вида начинки.
//   Используйте while and do.. while loops” - это задание с предыдущего потока,
//    его разбор есть в видео, можете не делать, по желанию)



// 5.  Усовершенствуйте решение задачи про улитку с помощью  наиболее подходящего цикла. 

// let dayDistance = 3
// let nigthDown = -2
// let distance = 0
// let days = 0
// let wall = 5

// // 1
// /*
// if ((distance += dayDistance) <= wall){
//     days++
//     console.log(`Current distance at the end of the day for day ${days} is ${distance} meter(s)`)
//     distance += nigthDown
// }

// // 2

// if ((distance += dayDistance) <= wall) {
//     days++
//     console.log (`Current distance at the end of the day for day ${days} is ${distance} meter(s)`)
//     distance += nigthDown
// }

// // 3

// if ((distance += dayDistance) <= wall) {
//     days++
//     console.log (`Current distance at the end of the day for day ${days} is ${distance} meter(s)`)
//     distance += nigthDown
// }

// //4

// if ((distance += dayDistance) <= wall) {
//     days++
//     console.log (`Current distance at the end of the day for day ${days} is ${distance} meter(s)`)
//     distance += nigthDown
// }
// */

// //IMPROVMENT

// while((distance += dayDistance <= wall)){
//     days++
//     console.log (`Current distance at the end of the day for day ${days} is ${distance} meter(s)`)
//     if(distance == wall) console.log('Finish!')
//     else console.log('Go forward!')
//     distance += nigthDown
// }

// 6. Задача с интервью*
// У вас есть массив с тремя видами скобок, предположим 
// [ ‘{‘, ‘)’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘)’] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, все ли скобки являются парными  в правильной последовательности (открывающая и затем закрывающая). Также, скобки могут быть вложенными, но тем не менее, если последовательность соблюдена, то они считаются парными.
//  Пример:
// [ ')', '{', '(', '(', ')', ')', '}, '[', ']', '(' ]  - у двух нет пары (нарушена последовательность)
// [ '{', '(', '(', ')', ')', '}, '[', ']' ]  - у всех есть пара
// [ '{', '(', '(', ')', ')', '}, '[', '[', ')' ] - у трех нет пары

let counOpen = 0
let countClose = 0
let result = 0

// let myArr = [ ')', '{', '(', '(', ')', ')', '}', '[', ']', '(' ]
// let myArr = [ '{', '(', '(', ')', ')', '}', '[', ']' ] 
let myArr = [ '{', '(', '(', ')', ')', '}', '[', '[', ')' ] 

// for (let i in myArr) //2nd case
for (let i = 0; i < myArr.length; i++){
    if(myArr[i] == '('){
        counOpen += 1
    }else if (myArr[i] == ')') countClose += 1

    result = counOpen - countClose
    
    console.log(result)
    if(result < 0 ){
        console.log('Wrong sequance')
    }break;
    
}

if(counOpen == countClose){
    console.log('equal')
}else console.log('not equal')