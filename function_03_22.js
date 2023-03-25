let arr = ['Tom', 'green', 55, 'apple', 43, 88, 'pear', 'red', 1];

// find the number
/*
let newArr = []

// ----------- example with loop--------------

for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] == 'number'){
        newArr.push(arr[i])
    }
}
console.log(newArr)
*/

// ----------- example with function--------------
let fruits = ['apple', 9, 'grape', 100, 'banana', 89]

function createArrOfNumbers(array) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == 'number') {
            newArr.push(array[i])
        }
    }
    return newArr
}
console.log(createArrOfNumbers(arr))
console.log(createArrOfNumbers(fruits))  