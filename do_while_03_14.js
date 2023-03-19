//----------------while------------------
   

// let i = 0;
// while (i < 3){
//     console.log(i)
//     i++
    
// }

// console.log('\n ')

// let j = 7
// while(j != 0){
//     console.log(j)
//     j--
// }
/*
console.log('\n ')

const fruits = ['apples', 'pears', 'plums', 'grape' ]
let i = 0
while(i < fruits.length){
    console.log(fruits[i])
        i++
}


console.log('\n ')

const fruits2 = 'apples, pears, plums, grape' 

let index2 = 0
while(index2 < fruits2.length){
    console.log(fruits2[index2])
        index2++
}
*/

//-------------do ....while------------------

// let k = 0;
// do{
//     console.log(k)
//     k++
// }while (k <  3)


//-------------break; continue-----------------

// for(let i = 0; i <=10; i++){
//     if(i == 7) break
//     console.log(i)
// }

// for(let i = 1; i <= 10; i++){
//     if(i % 2 === 0) continue // esli vstretil cetniej propusti i idi dalshe. Poetomu output necetnie  
//     console.log(i)
// }

// let fruits = ['apples', 'pears', 'plums', 'grape' ]

// for(let i = 0; i < fruits.length; i++){
//     if(fruits[i] == 'plums'){
//         continue
//     }
//     console.log(fruits[i])
// }

/*
let fruits = ['apples', 'pears', 'plums', 'grape' , 'watermelon']

for(let i = 0; i < fruits.length; i++){
    if(fruits[i] == 'plums'){
        console.log('haker attack')
        break
    }

    if(fruits[i] == 'grape'){
        continue;
    }
    console.log(fruits[i])
}
*/

//-------------FOR IN------------------

// const numbers = [45, 4, 9, 16, 25];

// let txt= "";
// for(let x in numbers){ //each element is running in numbers
//     // txt += numbers[x]
//     console.log(numbers[x])
// }
// console.log(txt)



//-------------for of------------------
/*
const cars = ['BMW, Volvo, Mini']

let text = "";
for(let el of cars){
    // text += el
    // console.log(cars[el])
    console.log(el)
}
*/

//-------------inner loop------------------
//1            //line == 1
//12          //line == 2
// 123       //line == 3
// 1234     //line == 4
// 12345   //line == 5
/*
for(let i = 1; i <= 5; i++){
    console.log(i)
}

console.log('\n')

for(let line = 1; line <=5; line ++){
    let str = "";
    for(let numInLine  =1; numInLine <= line; numInLine++){ // inner loop
        str += numInLine

    }
    console.log(str)
}
*/


//-------------2------------------

/*
for(let i = 5; i >= 1; i --){
    let str=""
    for(let j = i; j >= 1; j--){
        str += j
    }
    console.log(str)
}
*/

//-------------kak dostat eleemnt iz vlozhenogo array------------------

let arr = [1, ["a", "b", [5, 7]], 3, "Herro ok"]

console.log(arr[3][2])

let arr2 = [1, 3]