'use strict'

// Do over! Starting from scratch here


function askAge() {
    var age = prompt('Hello. How old are you?');
    console.log(age);
    return age;
}
function neverTooOld(ageFromFunction){
    if (ageFromFunction < 100){
    alert('Awesome! Being younger than 100 means now is a good time to start!');
    } else if (ageFromFunction === 100){
    alert('Awesome! You are 100!');
    } else if (ageFromFunction > 100){
    alert('Congrats, you are older than 100.');
    }
}

var ageFromFunction = askAge();
neverTooOld(ageFromFunction)