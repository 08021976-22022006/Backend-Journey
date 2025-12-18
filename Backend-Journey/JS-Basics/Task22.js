function greet(name, sayHi) {
    sayHi();               // callback function is called
    console.log("Hello " + name);
}

function sayHi() {
    console.log("Hi!");
}

greet("Poojana", sayHi);