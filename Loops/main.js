"use strict";

let count = '';
let i =0

do {
    i = i + 1;
    count = count + i;
}
while (i < 1000);

console.log(`The count is: ${count}`)

/**************************/
;
let Person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
};


for (const key in Person) {
        if (Person.birthDate % 2 !== 0) {
        console.log(`${key}: ${Person[key]}`)
        } 
} 



/**************************************************** */


const arrayOfPersons = [

{
    firstName: "James",
    lastName: "Scott",
    birthDate: "Mar 25,1977",
    gender: "male"
},

{
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "May 20, 1925",
    gender: "female"
},

{
    firstName: "John",
    lastName: "Smith",
    birthDate: "Sept 12, 1992",
    gender: "male"
},

{
    firstName: "Lance",
    lastName: "Hammond",
    birthDate: "Apr 5, 1984",
    gender: "male"
},

{
    firstName: "Amber",
    lastName: "James",
    birthDate: "Apr 24, 1998",
    gender: "female"
},

];


const u = arrayOfPersons.map( people => {
    return people;
});

console.log("The Map fucution:", u);


const theMales = arrayOfPersons.filter( m => {
    if(m.gender === 'male') {
        return true;
    }
});

console.log("The list of Males:", theMales);

const bornYear = arrayOfPersons.filter( y => {
    let x = new Date(y.birthDate)
    //console.log("This is the Date:", x)
    //console.log("This is the year:", x.getFullYear())
    if(x.getFullYear() < 1990) {
        return true;
    }
});

console.log("The people that was born before 1990:", bornYear);