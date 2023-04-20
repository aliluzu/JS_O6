// not a callback, regular function
/*
function cal(a, b, sign){
    if(sign == "*"){
        return  a * b
    }else if(sign == "/"){
        return a / b
    }
}

//---------------------------------callback #1 ---------------------

function multiply(a, b){
    return a *  b
}

function divide(a, b){
    return a / b
}

function showResult(a, b, callback){
    if(typeof callback === 'function'){
        console.log(callback(a, b))
    }else return console.log("Your numbers are" + a + " and" + b)
}

//---------------------------------callback #2 ---------------------
showResult(3, 4, (a, b) => a * b)

//---------------------------------callback #3 ---------------------
showResult(21,3, divide)
//---------------------------------if the 3d paramets is not handed ---------------------
showResult(21, 3)
*/

//====================================== closure ================================================

//--------------------------------Example #1---------------------
/*
function outer(x, y){
    let tmp = 3;

    function inner(y){
        console.log(x + y + (++tmp)) // output: 9
    }
    // inner(10)
    inner(y)
}
outer(2, 3)

//--------------------------------Example #2---------------------

let Person = function(pName){//old class
    let name = pName

    this.getName = function() {
        return name
    }
}
let person = new Person("Natan") // create an istance of person class
console.log(person.getName())
*/
//====================================== promice ================================================
// исполльзуется для отлоденных и асихронныз вычислений
//has 2 parametrs: resolve, reject - functiions 
/*
const promise1 = new Promise((resolve, reject) => {
    setTimeout (() => {
        resolve ('everything is ok')

    }, 3000)
})

console.log(promise1)

promise1.then((value) => {
    console.log(value)
})
*/
// var 1
/*
function someFunction(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello_1000')
        }, 1000)
    })
}

someFunction()
    .then(console.log)
    .catch(console.error)
*/

//var 2

function someFunction(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello')
        }, 5000)
    })
}

someFunction()
    .then(response => {
        console.log(response)
        return response + "!"
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {console.error('this is error')})