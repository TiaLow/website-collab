'use strict'

// The two functions below prompt for age and based on your answer of less than, equal to, or more than 100, it will return a different message. 


function askAge() {
    var age = prompt(' How old are you?');
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

// At this point, everything above is working.

function askName(){
    var userName = prompt('Hello! Whats your name?');
    return userName;
}

function askReady(userName){
    var ready = prompt(userName + ' , are you ready to start coding?').toLowerCase();
    while((ready !== 'no') && (ready !== 'yes')){
        ready = prompt(userName + ' , but...but are you ready to start coding?').toLowerCase();
    }
    return ready;
}

var userNameFromFunction = askName();



// function askDogs(userName){
//     var askDogs = prompt(userName + ', do you like dogs?') .toLowerCase();
//     while((askDogs != 'yes') || (askDogs == 'no')){
//         askDogs = alert('I HOPE YOU BURN IN HELL       .... just kidding !!!') 
//         askDogs = prompt(userName + ', TRY AGAIN ya dingus! do you like dogs?')
//     }
//     return askDogs;
// }

// var userNameFromFunction = askName();
// var askDogsFromFunction = askDogs(userNameFromFunction);
// likeDogs(askDogsFromFunction)



// var letterAnswer = 'beagles'
// var guess = 2;
// var letterGuess = prompt('Which Breed is the friendliest? Bulldogs, Terriers, or Beagles?').toLowerCase();
    
// for (var i = 0; i < guess; i = i + 1){
//     if (letterGuess === letterAnswer){
//         alert('WELCOME TO THE LAND OF DOG');
//         break;
//     } else {
//         var left = guess - i;
//         letterGuess = prompt('NOPE. NOPE. Bulldogs, Terriers, or Beagles?  ' + left + ' left.').toLowerCase();
//     }
// }