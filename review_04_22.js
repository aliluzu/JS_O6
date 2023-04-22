// ================== promise ==============

/*

let isNothingHAppened; //true || false

let willPassExam = new Promise(function(resolve, reject) {
    if(isNothingHappened) {
        let message = 'I got a diploma'
        resolved(message);
    }else {
        let reason = new Error('Oops, something happened')
        reject(reason)
    }
});

let checkEvents  = function(){
    willPassExam
        .then(function(noEvents){
            console.log(noEvents)
        })
        .catch(function(error){   //catch is using when somithing was happened
            console.log(error.message) 
        })
};


let getNewJob = function(diploma){
    return new Promise(function (resolve){
        let message = `I got a new job because ${diploma}`
        resolve(message)
    })
} 

checkEvents()
*/

//=================================================================================check via jsbin
/*

const url = 'https://openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02'

async function getCallToUrl() {
    let promise = await fetch(url)
    console.log(promise);
    if (promise.ok) {
        let result = promise.json()
        console.log(result)
    }else {
        console.log('Network error')
    }
}

getCallToUrl()
*/


const url = 'https://openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02'

async function getCallToUrl() {
    let promise = fetch(url)
        .then(res => {
            console.log(res)
            if(res.status == 200){
                let result = res.json()
                console.log(result)
            }else{
                console.log('Network error')
            }

        })
        .catch(() => console.log('Error'))
    
}

getCallToUrl()