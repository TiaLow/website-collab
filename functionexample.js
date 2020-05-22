'use strict'

// Do over! Starting from scratch here

function askName() {
    var userName = prompt('Hello.  What is your name?');
    console.log(userName);
    return userName;
}

function askOldComputer(userName){
    var oldComputer = prompt(', Do you like old computers?').toLowerCase();
    return oldComputer;
}

function typeOfComputer(){
    var typeComputer = prompt('What type of computer do you have?');
    console.log(typeComputer);
}

function likeOldComputers(oldComputerFromFunction){
    if (oldComputerFromFunction === 'yes'){
        alert('Awesome.  I like old computers too!');
    } else if (oldComputerFromFunction === 'no'){
        alert('How can I change you mind about that?');
    }
}


if (typeOfComputerFromFunction === 'vic-20'){
        alert('Wow, that is really old');
    }
    
    var userNameFromFunction = askName();
    var oldComputerFromFunction = askOldComputer(userNameFromFunction);
    var typeOfComputerFromFunction = typeOfComputer();
    likeOldComputers(oldComputerFromFunction)
