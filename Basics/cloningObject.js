const circle = {
    radius : 4,
    draw: function () {
        console.log('draw ');
    }
}


// cloning the object

// const another = {}; // creating new  Object

// for (let key in circle) 
//     another[key]=circle[key];


// console.log('another ',another);
 

// second way
// const another = Object.assign({color: 'Blue'}, circle);

// console.log(another);

// const another= {...circle};

// console.log('spread operator ', another);

// Enumerating properties of the object

// for (let key in circle) 
//     console.log(key);

// of loop is iterable only with arrays and maps

// for (let key of circle)
//     console.log(key);  // not iterable

// for (let key of  Object.keys(circle))
//     console.log(circle[key])

for (let entry of Object.entries(circle))
    console.log(entry);
