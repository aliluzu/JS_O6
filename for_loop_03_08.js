/*

let arr = ["a", "hello", 5, -10, "0", true, "_", false, 8, 9, ["hi", true, 8, "="]];
//          0      1     2   3    4     5     6     7   8   9      10
let str = 'Hi, what os your name?'

// console.log(arr.length)


// ------------------ Example 1 --------

 /*
for(i = 0; i < arr.length ; i++ ){
    console.log(arr[i]) // arr[i] - it is a current element of array
    console.log(i)     // i - index of elemt in the array
}

*/

// ------------------ Example 2 --------

/*
let count = 0; // != 0 if you will multiple

for(i = 0; i < arr.length ; i++ ){

    // console.log(typeof arr[i])

    if(typeof arr[i] == 'number'){
        // count ++     // equal count +=1


    }
   
}
console.log(count)
*/

// ------------------ Example 3 -------- sum of all numbers 
/*
let count = 0; 
let sum = 0;

for(i = 0; i < arr.length ; i++ ){

    // console.log(typeof arr[i])

    if(typeof arr[i] == 'number'){
        sum += arr[i]
        console.log(sum)  // 5 -> -5 -> 3 -> 12

    }
   
}
*/

// ------------------ Example 4 -------- find an even element
/*
let arr1 = ["a", "hello", 5, -10, "0", true, "_", false, 8, 9, ["hi", true, 8, "="]];

for(let i = 0; i < arr1.length; i++){
    
    if(i % 2 === 0){
        console.log(arr1[i])
    }else{
        console.log("Index: " + i)
    }
}
*/

// ------------------ Example 5 -------- 

/*

let arr2 = ["a", "hello", 5, -10, "0", true, "_", false, 8, 9, ["hi", true, 8, "="]];
let str = " ";

for(i = 0; i < arr2.length; i++){
    if(typeof arr2[i] == "string")
    str += arr2[i] + " "
}
console.log(str)
*/

// ------------------ Example 6 -------- 

let arr2 = ["agaga", "hello", 5, -10,"hi", true, "buy", false, 8, 9, ["hi", true, 8, "="]];
let str = " ";

for(i = 0; i < arr2.length; i++){
    if(typeof arr2[i] == "string")
    console.log(arr2[i].length)
}
console.log(str)