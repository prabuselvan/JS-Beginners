// const circle = {
//     radius: 10,
//     location : {
//         x : 1,
//         y: 2
//     },
//     isVisible: true,
//     draw: function () {
//         console.log('This is draw function'); // object level is function
        
//     }
// }

// circle.draw();

// factory Function -- > returns the object

// const createCirlce = function (radius) {
//     return {
//         radius: radius,
//         draw: function () {
//             console.log('draw function');
            
//         }
//     }
// }

// const c1 = createCirlce(1);
// console.log(c1);

// const c2= createCirlce(2);
// console.log(c2);

// constructor Function

// function CreateCircle (radius) {
//     this.radius=radius;
//     this.draw= function( ) {
//         console.log('draw');
//     }
//     // return this --> internally
// }

// const cons1func=  new CreateCircle(100); // -> create a new object x = {};
// console.log(cons1func);

// dynamic nature of objects
// const circle =  {
//     radius :1
// }

// circle.color = 'Blue';
// circle.draw= function () {
//     console.log('draw');
// };

// // delete the member from the object
// delete circle.color;
// console.log(circle);

// Constructor Property

// function Circle(radius) {
//     this.radius=radius;
//     this.draw = function () {
//         console.log('draw');
//     };
// };

// const c1 = new Circle(100);
// console.log(c1);

// we can call constructor function using Call method

// Circle.call({},100);

// Circle.apply({}, [1,2,3,4]);

// console.log(Circle.radius);

// let x= {};
// let x = new Object();  //Object constructor function

// let str ='prabu' 
// let str= new String('prabu');

// functions are objects

// console.log(c1.radius);

// Every function in javascript has a constructor property that reference the function that was used to create the object

// function test () {
//     console.log('test');
// }
// const t1 = new test();


// const Circle1 = new Function ('radius', `
// this.radius = radius;
// this.draw = function () {
//     console.log('draw');
// }
// `);
// const c2= new Circle1('200');
// console.log(c2.radius);

// value Types

// let a =10;
// let b=a;

// a=20;

// Primitive types are copied by their values
// Reference Types
// objects are stored in the memory 

// let a1 = {
//     value : 10
// };

// let b1= a1;

//  a1.value=100;

//  const number =10;

//  function increment(number) {
//      number++;
//  }
//  console.log(number);
 


//  let obj = {
//      value: 100
//  };

//  function increase (obj) {
//      obj.value++
//  };

//  increase(obj);
//  console.log(obj);

// Enumerating properties on object

const circle = {
    radius : 10,
    draw: function() {
        console.log('draw');
    }
};

// for in loop
// for (let key in circle) 
//     console.log(key , ':' ,circle[key]);

// cannot iterate using for of loop
// for (let key of circle) 
//     console.log(key);

// for (let key of Object.keys(circle))
//     console.log(key);


// const x1 = {value :1};
// function Object() {} when we create a object internally it will behave like this
// const x1= new Object();

// let o1 =Object.keys(circle); // returns the string array which contains the properties and methods (returns th keys)
// console.log('o1', o1);

// Object.entries
// for (let entry of Object.entries(circle))
//     console.log(entry);

    // In Operator
// if ('radius' in circle) console.log('Yes');


// Cloning the Object

// const newCircle ={...circle};
// console.log('newCircle ', newCircle);

// second way to clone the object
// const another = {};

// for  (let key in circle) 
//         another[key] = circle[key];

// console.log(another);

// Third way to clone the object

const another = Object.assign({
    color: 'blue'
}, circle);
console.log(another);


// garbage collector -- > deallocate the memory will be taken care by javascript


// for (let key in another)
//     console.log(key);

// for (let key of Object.keys(another))
//     console.log(key); // will retrieve only the keys
 
// for (let entry of Object.entries(another))
//     console.log(entry)

// Object assign

const sample = Object.assign({name: 'Prabu'}, another);
console.log(sample);
// const message = 'hi'; // this is the string



const m = new String('Hello');
console.log(m); // this is the object

const message = "This is my \' first message";

console.log(message.length);
console.log(message[0]);
console.log(message[1]);
console.log(message.includes('not'));
console.log(message.startsWith('This'));
console.log(message.endsWith('message'));
console.log(message.indexOf('my'));
console.log(message.replace('first' ,'second')); // this wont change the main string
console.log(message);
console.log(message.toUpperCase());
console.log(message);
console.log(message.trim());