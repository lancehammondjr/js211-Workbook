'use strict'

let array1 = [1, 2, 3, 4, 5, 6]

function sumArr(array1) {
    //base case
    if (array1.length ==1) {
        return array1[0]
    }
    //Recursion
    return array1[0] + sumArr(array1.slice(1))
}

console.log(sumArr(array1))