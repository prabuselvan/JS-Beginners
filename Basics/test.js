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

// Arrays is a data structure used to represent the list of items
// we can store different data types in array
// array size is dynamic
//  array is an object in javascript
let selectedColors= ['red','blue','Yellow'];
console.log(selectedColors);


function greet(name, lastName) {
    console.log('Hello ', name , lastName);
    
}
greet('Prabu', 'Selvan');

function square(num) {
    return num*num;

}

console.log(square(5));

const arr = [101,2,3,4,5];

for (let val in arr) 
    console.log(val);  // for in gives in the index of an array
    

// let  sum =0
// for (let val of arr) 
//     sum+=val
// console.log(sum);

// using reduce

// let sum = arr.reduce((acc, curr)=> acc +  curr)
// console.log(sum);

