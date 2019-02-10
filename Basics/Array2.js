// primitive values

// let  a=10;
// let b=a;
// a=20;
// console.log(b);

// Referrence values


// let numbers =[1,2,3,4,5];

// let another =numbers;

// solution1 --> to empty the array
// numbers=[];
// console.log(another);

// solution2 --> to empty the array

// numbers.length=0;
// console.log('numbers ',numbers);
// console.log('another ',another);

// console.log(numbers.length);

// solution 3-->
// numbers.splice(0, numbers.length);
// console.log(numbers);

// using pop removing all elements in the array

// while (numbers.length > 0) {
//     numbers.pop();
// }
// console.log(numbers);

// combining two arrays

// const arr1 = [1,2,3];
// const arr2= [4,5,6];

// const combined = arr1.concat(arr2);
// console.log(combined);

// const slice = combined.slice(); // --> get the copy of the array

// const slice = combined.slice(2, 4); // starts at 2 and ends at 4

// const slice = combined.slice(2);  // starts from 2 and gives all
// console.log(slice);


// const first = [{id: 1}];

// const second = [5,4,3];

// const combined = first.concat(second);
// console.log(combined);

// slice method works --> primitive types will be copied based on the values
// slice method works --> Reference types will be copied based on the reference

// using Spread Operator

// const first = [1,2,3,4,5];
// const second = [6,7,8,9,10];

// const spreadop = [...first,...second];

// console.log(spreadop);

// console.log('copying array ', spreadop.slice());

// const copy = [...spreadop];

// console.log(copy);

// using for each

const numbers =[1,2,3,4,5];

// for (let val of numbers)
//     console.log(val);

// // second way

// numbers.forEach((num, index)=> console.log(index ,' : ', num));

// console.log(numbers);
// const joined= numbers.join('P');
// console.log(joined);

// for (let val of joined)
//     console.log(val);

const message = 'This is my first message';

const sp =message.split(' ');
console.log(sp);

const jn = sp.join('-');
console.log(jn);