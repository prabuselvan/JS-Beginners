const numbers = [1,2,3,4,5];
// numbers =[]; // using const cant change the array

// numbers.push(400); // adding elements to the last

// numbers.unshift(2000,3000); // adding elements to the front

// numbers.splice(1,0,'Prabu','Selvan'); // adding elements in the middle

// console.log(numbers);

// Finding elements in the array

// const index = numbers.indexOf('400');
// console.log(index); // if nothing find it returns -1

// const numarr = [1,2,3,4,5,1,2,3];
// const val = numarr.indexOf(1,1);
// console.log(val);

// const val = numarr.includes(1);
// console.log(val);

// using find method --> used to search the elements in the objects
// returns the first element when it finds
// if nothing finds it returns undefined

// var courses = [
//     {id: 1 , name :'a' },
//     {id: 2 , name: 'b'}
// ];

// const finalval = courses.findIndex(function (course) {
//     return course.id===1;
// });

// console.log(finalval);

// const finalval =courses.find((course)=> course.id===1);
// console.log(finalval);

// const str= 'Welcome';
// const s= courses.findIndex((t)=> console.log(t.id ==2));

// console.log(s);

// const newNumbers= [100,200,300,400,500];
// const t = newNumbers.find((el)=>el > 100); // returns the first element
// console.log(t);

// using filter

// const fil = newNumbers.filter((f)=>  f>200);
// console.log('Using filter is ', fil);

// checking isODD
// var inventory = [
//     {name: 'apples', quantity: 2},
//     {name: 'bananas', quantity: 0},
//     {name: 'cherries', quantity: 5},
//     {name: 'pineApple', quantity: 34}
// ];

// var test = inventory.find((isCherries)=> isCherries.name==='cherries');
// console.log(test);


// var array = [0,1,,,,5,6];
// array.find((value, index)=> console.log('visited index ', index , 'and the value is ', value));

console.log(numbers);

// const last  = numbers.pop(); // removing elements from the last
// console.log(numbers);
// console.log('last element is ', last)

// removing elements from the front

// const front = numbers.shift();
// console.log(front);
// console.log(numbers);

numbers.splice(2,2);

console.log(numbers);