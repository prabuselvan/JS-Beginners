// function fizzbuzz(input) {

//    if (typeof(input) !=='number') return  NaN
//    else if(input % 5 ==0 && input % 3 ===0 ) return 'fizzbuzz' 
//    else if (input % 5 === 0) return  'Buzz'
//    else if (input % 3 === 0) return  'Fizz'
//    else if (input % 5 !== 0 && input % 3 !==0) return  input;
// }
// const output = fizzbuzz(false);
// console.log(output);

// const output = checkSpeed(130);
// console.log(output);


// function checkSpeed(speed) {
//     const normalSpeed= 70;
//     const maxSpeed =180;
//     const kmperPoint =5;
//     if (speed <=normalSpeed) return 'OK'
//     else if(speed >=maxSpeed ) return 'LICENSE SUSPENDED'
//     else if (speed  > normalSpeed && speed < maxSpeed) {
//         let temppoints = Math.floor ((speed - normalSpeed) / kmperPoint);
//         if (temppoints===0) return 'OK'
//         else return temppoints + ' point '; 
//     }
// }


// console.log(showNumbers(10));

// function showNumbers(limit) {
//     if (limit > 0 ) {
//         for (let i=0; i<= limit; i++ ) {
//             // if ( i % 2 === 0 ) console.log (i + ' EVEN');
//             // else console.log( i + ' ODD');
//             const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
//             console.log(i , message);
//         }
//     } else {
//         return 'Number should be greater than zero';
//     }
// }


// Count Truthy
// falsy values 
// undefined, null,'',false,0 NaN
// const arr = [null,false,1,2,3,undefined,6, NaN];

// countTruthy(arr);

// function countTruthy(arr) {
//     let count= 0;
//     // for (let i = 0; i <arr.length; i++) {
//     //     if (arr[i])  count ++;
//     // }

//     // using for of loop
//     for (let value of arr) {
//         if (value) count ++;
//     }
//     console.log(count);
// }

// const obj = {
//     title: 'Terminator',
//     Released : 1999,
//     rating: 4.5,
//     actor: 'Arnold'
// }

// if it is object then we have to use for in loop
// if it is array then we have to use for of loop
// showProperties(obj)


// function showProperties (movie) {
//     for (let temp in movie) 
//         if (typeof(movie[temp]) === 'string') 
//             console.log( temp ,':' ,movie[temp]);     
// }

// console.log (sum(10));

// function sum (limit) {
//     let count = 0;

//     for (let i=1; i <= 10; i++ ) {
//         if (i% 3 ===0 || i%5 ===0) count+= i;
//      }

//     return count;
// }

// finding the average

// const marks = [80,80,90];

// console.log (calculateMarks(marks));

// function calculateMarks(arr) {
//    const avg=  calculateAvg(arr);
//    const grade = findGrade(avg);
//     return grade;
//    }

// function calculateAvg(arr) {
//     let sum = 0, totalIndex = arr.length, avg =0;
//     for ( val of  arr)  sum+= val;
//     // console.log(sum);
//     avg= sum/totalIndex;
//     return avg;
//     // console.log(avg);
// }

// function findGrade(avg) {
//     if (typeof(avg) !== 'number' ) return NaN
//     else if(avg< 59) return 'F';
//     else if (avg>60 && avg <69) return 'D';
//     else if (avg>70 && avg <79) return 'C';
//     else if (avg>80 && avg <89) return 'B';
//     else if (avg > 90) return 'A'
// }

// showStars(1);

// function showStars(stars) {
//     for (let i=1; i<=stars ; i++) {
//         let star='';
//         for (let j=1; j<=i; j++) {
//             star+='*';
//         }
//         console.log(star);
//     }
// }

    // To Find out the prime numbers

showPrimes(5);

function showPrimes(limit) {
    
    for (let number=2; number <=limit; number++) {
     if (isPrime(number)) console.log(number);
    }
}

function isPrime (number) {
    let isPrime= true;
    for(let factor=2; factor< number; factor++) {
        if (number % factor === 0) {
            isPrime=false;
    
        }
        return isPrime;
    }
}