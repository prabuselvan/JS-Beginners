function sum (a, b) {
    // return a + b;
    let total = 0;
    for (let val of arguments)
        total +=val;

    return total;
}

console.log (sum(1,2,3,4,5,6,7,'prabu'));

//  1 + undefined == > NAN
// 1 + "Prabu"=> 1Prabu