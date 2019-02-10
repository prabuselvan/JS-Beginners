let numbers = [1,2,3,4,5,2,120,0];

// largest element in the array

const val = getMax(numbers);

console.log(val);

// with reduce

// function getMax (arr) {
//     arr.reduce((accumulator, currentVal)=> {
//         // if (currentVal > accumulator) return currentVal
//         // return accumulator;
//         (currentVal > accumulator) ? currentVal : accumulator
//     })
// }


function getMax(arr) {
   return arr.reduce((a,b)=>  (b > a) ? b : a);
        
}

// with out reduce
// function getMax(arr) {
//     if(arr.length===0) return  undefined
    
//     let max= arr[0];
//     // let min = arr[0];

//     for (let i=1; i<arr.length; i++) {
//         if (arr[i] >  max) {
//             max=arr[i];
//         }
//     }        
//     return max;
// }


// using reduce
// const val= countNumberOfOccurances(numbers, 2);
// console.log(val);

// function countNumberOfOccurances(arr, searchElement) {
//     return arr.reduce((accumulator, currentVal)=> {
//     //   const occurances = (currentVal === accumulator) ? 1 : 0
//     //   return accumulator + occurances

//     if (currentVal===searchElement) {
//         accumulator++;
//     }
//     return accumulator;
//     },0)
// }

// const op =  countNumberOfOccurances(numbers, 12);

// console.log(op);

// function countNumberOfOccurances(arr, searchElement) {
//     let count =0;
//     for (let val of arr) 
//         if (!arr.includes(searchElement)) {
//             return -1;
//         } else if(val===searchElement) {
//             count++;
//         }
    
// return count;

// }

// const numbers = [1, -1,2 ,3];

// const val =sumOfAllNumbers(numbers);
// console.log(val);

// // sum of all numbers
// function sumOfAllNumbers() {
//     let sum=0;
//     for (let val of numbers)
//         sum+=val;
    
//     return sum;
// }

// a=0 , c =1 => 1 
// a=1, c=-1=> 0
// a=0, c= 2=> 2
// a=2, c= 3 => 5

// using reduce method
// const val = numbers.reduce((accumulator, currentValue)=> {
//     return accumulator + currentValue;
// },0);
// console.log(val);