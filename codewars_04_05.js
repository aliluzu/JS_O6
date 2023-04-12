/*
let str = "Hello world, how are you?"  

for(let i in str){
    console.log(str[i])
}

*/
// ---------------------------------------------

/*
let arr = ['Sam', 56, true, false, 2, 'Hello']
// for(let i in arr){
//     console.log(arr[i])
// }

// ---------------------------------------------
let person = {
    name: 'Anna',
    lastName: 'Smith',
    age: 20
}
for(let key in person){
    // console.log(key)      //output: key
    console.log(person[key]) //output: value
}
*/
// ---------------------------------------------
/*
let str = "Hello world, how are you?"  //{1: "H", 2: "e"}

let newObject = {}

for(let i = 0; i < str.length; i++){
    newObject[i + 1] =str[i] 
}
console.log(newObject)
*/

// ---------------------------------------------
/*
let newObject =  {}
    newObject["id"] = 2
    newObject["name"] = "Ali"
    newObject["key"]  = "#"

console.log(newObject) //output: { id: 2, name: 'Ali', key: '#' }
*/

// ---------------------------------------------

let str = "Hello world, how are you?"  //{1: "H", 2: "e"}

let newObject = {}

for(let i = 0; i < str.length; i++){
    newObject[i + 1] =str[i] 
}
delete newObject[25]
console.log(newObject)

console.log(Object.keys(newObject))    //ouput: all key ['1',  '2',  '3',  '4',  '5', ....]
console.log(Object.values(newObject)) //ouput: values ['H', 'e', 'l', 'l', 'o', ...]