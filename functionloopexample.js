'use strict'

// The two functions below prompt for age and based on your answer of less than, equal to, or more than 100, it will return a different message. 


function askAge() {
    var age = prompt('Hello! How old are you?');
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

function askName(){
    var userName = prompt('What is your name?');
    return userName;
}

function askReady(userName){
    var askReady = prompt(userName + ', are you ready to start coding?') .toLowerCase();
    while((askReady == 'no') || (askReady != 'yes')){
       askReady = prompt(userName + ', but...but are you ready to start coding?') .toLowerCase();
    }
    return askReady;
}

var userNameFromFunction = askName();
var askReadyFromFunction = askReady(userNameFromFunction);


// At this point, everything above is working!

