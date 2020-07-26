/**
 * Write a recursive function that will return the fibunaci value at the given position.
 * 
 * For position 0, the value is always 0 -> p(0) = 0
 * For position 1, the value is always 1, -> p(1) = 1
 * For any other position, the value is the sum of the values from the previous 2 postions
 */

function fibunaciAt(position) {
     //code up the 3 rules
     //base case 
     if (position < 2) {
         return position; // return the position if its greater then 2
     }
     //if note return the ( pervious position minus one back) plus (pervious position minus two back) 
     return fibunaciAt(position - 1) + fibunaciAt(position - 2);
}


let answer0 = fibunaciAt(0);  //0
let answer1 = fibunaciAt(1);  //1
let answer13 = fibunaciAt(13); //233

console.log(answer0);
console.log(answer1);
console.log(answer13);