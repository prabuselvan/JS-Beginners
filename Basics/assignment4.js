let numbers = [1,2,3,4,5,2,2];


const op =  countNumberOfOccurances(numbers, 12);

console.log(op);

function countNumberOfOccurances(arr, searchElement) {
    let count =0;
    let flag=true;
    for (let val of arr) 
        if (!arr.includes(searchElement)) {
            return -1;
        } else if(val===searchElement) {
            count++;
        }
    
return count;

}