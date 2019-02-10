// Assignment 1
// const numbers = arrayFromNumbers(1, -4);

// console.log(numbers);

// function arrayFromNumbers (min, max) {
//     let num=[];
//     for (var i=min; i<=max; i++) {
//         num.push(i)
//     };
//     return num;
// }

// includes Array
// const numbers = [1,2,3,4];
// const searchElement=4;
// const val = includes(numbers,searchElement);

// console.log(val);
// function includes(arr, searchElement) {
//     let flag='';
//     for(let val of arr)
//       if(val=== searchElement) flag= true
//       else flag= false
//     return flag;
// }  

// Removing elements from array

// const numbers = [1,2,3,4,1,1];

// const removingArr= [1,2];
// const val =except(numbers, removingArr);
// console.log(val);

// function except(arr, excluded) {
//     const output = [];
//     for (let element of arr) 
//         if (!excluded.includes(element)) 
//             output.push(element);
//     return output;
// }



// function except(arr, excluded) {
//     arr.forEach((val, index)=> {
//         excluded.forEach((exclval,jindex)=> {
//             if(val===exclval)  {
//                 arr.splice(index, index);
//                 console.log('removed')
//             }
//         })
       
//     })
//     return arr;
// }



const numbers= [1,2,3,4];

// const sliceArr = numbers.slice(2,3); // lastindex -1
// console.log('Original Array ', numbers);
// console.log('sliced Array ',sliceArr);

// const op = numbers.splice(1,2, 'prabu');
// console.log(op);
// console.log('original array ', numbers);

const op = move(numbers, 0,2);

console.log(op);

function move(arr, index, offset) {

    const position = index + offset;

    if(position >= arr.length || position < 0) {
        console.error('Invalid input');
        return;
    }
        
    
    const output = [...arr];
    const element = output.splice(index,1)[0];
    output.splice(position,0, element);
    return output;
    
}
