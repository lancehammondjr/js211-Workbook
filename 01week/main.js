'use strict'

//Write a JavaScript program to display the current day and time.

let da = new Date();

console.log("The current time is " , da);

//Write a JavaScript program to convert a number to a string.

let num = String(84);

console.log(num);

//Write a JavaScript program to convert a string to the number.

let str = Number('54');

console.log(str);


//Write a JavaScript program that takes in different datatypes and prints out whether they are a:

let a = true;
console.log(typeof a);

console.log(typeof null);

let c = undefined;
console.log(typeof c);

let d = 5;
console.log(typeof d);

let e = Number([1,2,3]);
console.log(typeof e);

let f = 'hello';
console.log(typeof f);

//Write a JavaScript program that adds 2 numbers together.

let x = 2;
let y = 3;

let z = (x + y);
console.log(z);

//Write a JavaScript program that runs only when 2 things are true.

const checkThing = (g,h) => {
    if(g === h){
    return true
    }
}

console.log(checkThing(2,2));


//Write a JavaScript program that runs when 1 of 2 things are true.

const checkThing2 = (g,h) => {
    if(g === 3 && h !== 3){
        return false
    }
    else{
        return true
    }
}

console.log(checkThing2(3,3));

//Write a JavaScript program that runs when both things are not true.

const checkThing3 = (g,h) => {
    if(g === 5 && h === 6){
        return true
    }
    else{
        return false
    }
}

console.log(checkThing3(6,5));