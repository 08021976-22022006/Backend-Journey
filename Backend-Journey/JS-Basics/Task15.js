// Calculate the total age of users in the users array.

let ages = [0,10,20,30,40,50];
let totalAge = ages.reduce(function total(a,c){
    return a+c;
}, 0);

console.log(ages);
console.log(totalAge);