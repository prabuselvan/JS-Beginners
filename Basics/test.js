// let name; // op--> undefined

var name; // op--> empty as it is not decalred
console.log(name);

const firstName="Prabu"; // mandatory to intialize the variable

console.log(firstName); // once const is 

// firstName="Selvan"; //not allowed to change the const

// Primitive Types
// String, Number, Boolean, Null, Undefined

let  lastName="Selvan";

console.log(lastName);

let age =30;

let isApproved=true;

let selectedColor=undefined;

let nothing=null; // o/p is Object


// Javascript is a dynamic typing language

// Objects

let person = {
    fname: 'Prabu',
    lname:'Selvan'
};

console.log(person.fname);
console.log(person['lname']);

// to change the object value
// runtime if we dont know what property value has to be passed then bracket notation should be passed
person['lname']='Elamurugu Selvan';

console.log(person['lname']);


