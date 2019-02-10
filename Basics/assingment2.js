// First Assignment
// const address = {
//     street : 'West Street',
//     city: 'Los Angles',
//     zipcode: 1234
// }


// function showAddress(address) {
//     for (let key in address) 
//         console.log(key , ' : ', address[key]);
// }

// showAddress(address);

// second Assingment
// function showAddress (street, city, zipcode) {
//     return address = {
//        street,
//        city,
//        zipcode
//     }
// };

// const c1 = showAddress('West Street', 'Los Angles', 1231);
// console.log(c1);

// using constructor function

// function showAddress(street, city, zipcode) {
//     this.street = street;
//     this.city=city;
//     this.zipcode = zipcode;
// }

// const address1 = new showAddress('West Street', 'Los Angles', 1231);
// console.log(address1);

// const address2 = new showAddress('West Street', 'Los Angles', 1231);
// console.log(address2);

// const address3 = address1;

// function areSame (address1, address2) {
//     return address1===address2;
// }



// function areEqual (address1, address2) {
//     return address1.street === address2.street && address1.city === address2.city && address1.zipcode === address2.zipcode ;
// }

// console.log(areSame(address1, address2));
// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address3))


const blogPost = {
    title : 'blog',
    body : 'basics',
    author : 'Prabu',
    views: 4,
    comments : [
        {
            author : 'Selvan',
            body : 'test'
        },
        {
            author : 'Prabu Selvan',
            body : 'testq'
        }
    ],
    isLive: true
};

console.log(blogPost.comments[1].body);

function Post (title , body, author ) {
    this.title=title;
    this.body=body;
    this.author=author;
    this.views=0;
    this.comments = [];
    this.isLive
}

const p1= new Post('JS','Test', 'Prabu');

console.log(p1);