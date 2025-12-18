// Copy an object and change one property without modifying the original.

let person = {
    name: "Poojana",
    age: 19,
    year: 2006,
    city: "Erode"
}

let per = {...person};

per.age = 20;

console.log(person);
console.log(per);