'use strict';
let userName = prompt ("what is your name ? ");
console.log(userName);
alert ('Hello ' +    userName  +  ' let us play a guessing game');
let counter = 0;


let major = prompt ('Did I graduate in majored of English ?')
if (major ==='yes' || major === 'y'){
    alert("great");
}else if (major === 'no'|| major === 'n'){
    alert("Not correct"); 
    counter++;
}

let age = prompt ('Am I 22 years old ?')
if (age === 'yes'|| age === 'y') {
    alert("correct");
} else if ( age === 'no' || age === 'n'){ 
    alert("Wrong");
    counter++;
}

let love = prompt ('Do I love to learn something new?')
if (love === 'yes'|| love === 'y'){
    alert("Amazing !");
} else if ( love === 'no'|| love === 'n'){ 
    alert("sorry incorect");
    counter++;
}

let number = 5;
for (let i = 0; i < 5; i++) {
    let Try = prompt('guess a number from 1 to 15');
    if (Try == number) {
        alert('Good ' + 'the number is ' + number);
        counter++;
        break;
    }
    else if (Try > 5) {
        alert('too high');
    }
    else {
        alert('too low');
    }
    if (i == 4) {
        alert('you can not try any more');
    }

}

let seasons = ['summer', 'winter', 'autumn', 'spring'];


for (let i = 0; i < 6; i++) {
    let mentionSea = prompt('Mention a name of any seasons');
    if (seasons.includes(mentionSea)) {
        alert('Amazing ' + userName);
        counter++;
        break;
    }
    if (i == 5) {
        alert('you lose , can not guess any more '); }
}



if (counter > 5) {
    alert('your score is'   + counter + 'from 5');
}
