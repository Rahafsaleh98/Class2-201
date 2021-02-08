'use strict'
let userName = prompt ("what is your name ? ");
console.log(userName);
alert ('Hello' + userName + ' let us play a guessing game');


let major = prompt ('Did I graduated in majored of English ?')
if (major ==='yes' || major === 'y') {
    alert("great");
}else if (major === 'no'|| major === 'n') {
    alert("Not correct"); 
}

let age = prompt ('Am I 22 years old ?')
if (age === 'yes'|| age === 'y') {
    alert("correct");
} else if ( age === 'no' || major === 'n'){ 
    alert("Wrong");
}

let work = prompt ('Am I working ?')
if (work === 'yes'|| work === 'y') {
    alert("You Won");
} else if ( work === 'no'|| major === 'n'){ 
    alert("You lose");
}

