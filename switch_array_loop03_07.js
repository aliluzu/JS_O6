/*

let login = true

let course1 = 'js'
let course2 = 'java'
let course = course1
let region = 'Poland'


// Example of unreadable code


if (login == true) {
    if (course == course1) {
        console.log('Welcome!')
        if (region != 'USA') {
            console.log('Wake up early!')
        }
    } else console.log('Go to Java')
} else {
    console.log('Login is not correct')
}
*/

// ================= SWITCH ================

let day = 3;
switch(day){
    case 2:
        console.log("Tuesday");
        console.log("OK")
        break;
    
    case 3:
        console.log("Wednesday");
        console.log("OK")
        break;
    case 4:
        console.log("Thursday");
        console.log("OK")
        break;
    case 5:
        console.log("Friday");
        console.log("OK")
        break;
    default:
        console.log("Another day")
}