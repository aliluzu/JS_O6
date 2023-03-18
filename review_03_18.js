/*


let tr = "561567.678-som"
console.log(parseInt(tr))

console.log(parseFloat(tr))
*/

// ------------------------ set .vscode for following code 

/*
let a = 'a', b = 'b'
console.log(b + a + b/a + a)
*/
// --------------------------------------
/*
let a = 0, b = -7
console.log(b + a + b/a + a) //b/a by priority 
*/
// --------------------------------------
/*
for (let i = 10; i >= 0; i --){
    console.log(i)
}
*/

// ------------ console.error--------------------------
/*
let name = "Alina"

console.log("Hey")
console.error(name)
*/

// ---------------- console.error----------------------
/*
for(let i = 0; i <=10; i++){
    if (i==5){
        console.error(i)
        // console.warn(i)
    }else(
        console.log(i)
    )
}
*/

// let clssNmae = 'JavaScript'
// console.log(`%c${clssNmae}`, 'color=blue; font-size=48')


// ----------------console.table----------------------
// let name = [[1,2,4], [2,4,6], [3,6,9]]
// console.table(name)


// ----------------sort ASC----------------------

/*
const arr = [12, 46, 39, 4928, 645]
console.log(arr)

for(let i = 0; i <arr.length - 1; i ++){  //perebor do priposlednego 
    for(j = i + 1; j < arr.length; j++){ //perebor do poslednego
        if(arr[i] > arr[j]){            //perestanovka budet esli uslovie true
            let temp = arr[i];         //grubo govoria eto vedro kuda kladem novij element 
            arr[i] = arr[j]
            arr[j] = temp            // vozvrat proisxodit
        }
    }

}
console.log(arr)

*/
// ----------------2----------------------
// const arr = [12, 46, 39, 4928, 645]
// console.log(Math.min(...arr))
// console.log(Math.max(...arr))

// for(let i = 0; i <arr.length - 1; i ++){  
//     for(j = i + 1; j < arr.length; j++){ 
//         if(arr[i] > arr[j]){            
//             let temp = arr[i];         
//             arr[i] = arr[j]
//             arr[j] = temp            
//         }
//     }

// }
// console.log(arr)


// ----------------3----------------------

/*
const arr = [12, 46, 39, 4928, 645]
console.log(arr)

let min = arr[0];

for(let i = 0; i < arr.length; i ++){
    if(min > arr[i]){
        min = arr[i]
    }
}
console.log(min)


for(let i = 0; i <arr.length - 1; i ++){  
    for(j = i + 1; j < arr.length; j++){ 
        if(arr[i] > arr[j]){           
            let temp = arr[i];         
            arr[i] = arr[j]
            arr[j] = temp            
        }
    }

}
console.log(arr)
*/

// --------------------------------------

// 1
// 12
// 123
// 1234
// 12345

/*
let n = 5

let str = '';

for (let i = 1; i <= n; i ++){ // rows
    for(let j = 1; j <= i; j++){
        str += j;
    }
    str += '\n'  // perenos na new row
}
console.log(str)
*/


// --------------------------------------
//     1
//    12 
//   123
//  1234
// 12345

/*

let n = 5

let str = '';

for(let i = 1; i <= n; i ++){

    for(let k = n-i; k>=0; k--){ //example 1:  of space 
        str += " ";
    }

    // str += " ".repeat(n-i) //example 2:  of space 
    for(let j = 1; j <= i; j++){
        str += j;
    }
    str += '\n'  
}
console.log(str)
*/

// --------------------------------------
//     11
//    1221
//   123321
//  12344321
// 1234554321


/*
let n = 5

let str = '';

for(let i = 1; i <= n; i ++){

    for(let k = n-i; k>=0; k--){ //example 1:  of space 
        str += " ";
    }

    // str += " ".repeat(n-i) //example 2:  of space 
    for(let j = 1; j <= i; j++){
        str += j;
    }
    for(let k = i; k>= 1; k--){
        str += k
    }
    str += '\n'  
}
console.log(str)
*/

// --------------------------------------

//     1
//    121
//   12321
//  1234321
// 123454321 
/*
let n = 5

let str = '';

for(let i = 1; i <= n; i ++){

    for(let k = n-i; k>=0; k--){ //example 1:  of space 
        str += " ";
    }

    // str += " ".repeat(n-i) //example 2:  of space 
    for(let j = 1; j <= i; j++){
        str += j;
    }
    for(let k = i-1; k>= 1; k--){
        str += k
    }
    str += '\n'  
}
console.log(str)
*/

// --------------------------------------

let n = 5

let str = '';

for(let i = 1; i <= n; i ++){
    str += " ".repeat(n-i) //example 2:  of space 
    for(let j = 1; j <= i; j++){
        str += j;
    }
    for(let k = i-1; k>= 1; k--){
        str += k
    }
    str += '\n'  
}

for(let i = n-1; i >=1; i--){
    str += " ".repeat(n-1);
    for(let j =1 ; j <=i; j++){
        str += j
    }
    for(let k = i-1; k>= 1; k--){
        str += k
    }
    str += '\n'  
}
console.log(str)