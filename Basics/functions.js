// function declaration
function walk() {
    console.log('walk');
}

// Named Function expression
let run  =function running() {
    console.log('running');
};

let move = run;
// run();

move();

// anonymous function expression

// let run = function () {
//     console.log('run');
// };

// run();