const numbers = [5,4,3,2,1];
numbers.sort();
console.log('original array is ', numbers );
numbers.reverse();
console.log('After reverse ', numbers);

// sorting the object

const courses  = [
    {id: 1 , name: 'Node Js'},
    {id:2  , name: 'javaScript'}
];



courses.sort((a,b)=> {
    const aName= a.name.toLowerCase();
    const bName= b.name.toLowerCase();
   if(aName < bName) return -1;
   if (aName > bName)  return 1;
   return 0
});

console.log(courses);