'use strict'
let userName = prompt ("what is your name ? ");
console.log(userName);
alert ('Hello' + userName + ' let us play a guessing game');


let major = prompt ('Did I graduated in majored of English ?')
if (major.toLocaleLowerCase ==='yes' || major === 'y') {
    alert("great");
    score++
}else if (major === 'no'|| major === 'n') {
    alert("Not correct"); 
}
 

let age = prompt ('Am I 22 years old ?')
if (age.toLocaleLowerCase === 'yes'|| age === 'y') {
    alert("correct");
} else if ( age === 'no' || age === 'n'){ 
    alert("Wrong");
}


let love = prompt ('Do I love to learn something new?')
if (love.toLocaleLowerCase === 'yes'|| love === 'y') {
    alert("Amazing !");
} else if ( love === 'no'|| love === 'n'){ 
    alert("sorry incorect");
}


let work = prompt ('Am I working ?')
if (work.toLocaleLowerCase === 'yes'|| work === 'y') {
    alert("You Won");
} else if ( work === 'no'|| work === 'n'){ 
    alert("You lose");
}

