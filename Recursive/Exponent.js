'use strict'

function exp(x, powerOf) {
    if(powerOf === 1) {
        return x;
    }
    else {
        return exp(x, powerOf/2) ** 2;
    }
}


console.log(exp(2, 2));

console.log(exp(4, 2));

console.log(exp(100, 2));