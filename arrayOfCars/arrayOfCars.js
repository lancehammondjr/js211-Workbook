'use strict'

let arrayOfCars = ['Ford', 'Honda', 'Lancer', 'Silverado'];

console.log("The length of the arrayOfCars Array: ", arrayOfCars.length);

let moreCars = ['Tundra', 'Chevy', '4runner', 'Honda2']

let totalCars = arrayOfCars.concat(moreCars);

console.log("Total Cars: ", totalCars);

let a = arrayOfCars.indexOf('Honda');
let b = arrayOfCars.lastIndexOf('Ford');
console.log("Index of: ", a);
console.log("Last Index Of: ", b);

let stringOfCars = totalCars.join();
console.log("This is the string of the total Cars: ", stringOfCars);

let totalCars2 = stringOfCars.split();
console.log("The String back to an Array: ", totalCars2);

let carsInReverse = totalCars.reverse();
console.log("This is the Total Cars Array in reverse: ", carsInReverse);

let c = carsInReverse.sort();
console.log("The carsInReverse array sorted: ", c)

let removedCars = carsInReverse.slice(2,4);
console.log("This is the slice cars after its been sorted:", removedCars)

let d = carsInReverse.splice(2, 3, 'ford', 'honda');
console.log("This is the cars splice: ", d);

carsInReverse.push('Ford', 'Honda2');
console.log("The pushing of removed cars: ", carsInReverse)

console.log("The pop() function: ", carsInReverse.pop());

console.log("The shift() function: ", carsInReverse.shift());

carsInReverse.unshift('BMW');
console.log("The unshift() fuction: ", carsInReverse)

let numbers = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34]
//numbers.forEach(n);

// for(let i =0; i < numbers.length; i++){
//     console.log(numbers[i] + 2)
// }


// function n(x, index) {
//     console.log(x + 2);
// }

// const x = () => {
//     for(let i =0; i < numbers.length; i++){
//     console.log(numbers[i] + 2)
//   }
// }
  
// numbers.forEach(x)

numbers.forEach((element) => {
  console.log(element + 2)
})