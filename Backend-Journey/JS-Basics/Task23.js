// Create a function calculate(a, b, callback)

function add(a, b, multiply){
    console.log(a+b);
    multiply(a, b);
}

const multiply = ((a, b) => { console.log(a*b); });

add(5,5,multiply);


add(a, b)