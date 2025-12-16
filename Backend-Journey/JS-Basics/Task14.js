// Filter users older than 25 from the users array.

let ages = [0,10,20,30,40,50];
let newAge = ages.filter(function selectAge(age){
    return age > 20;
})

console.log(ages);
console.log(newAge)