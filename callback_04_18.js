// not a callback, regular function

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