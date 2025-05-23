const sanjay = {
    name : "Sanjay Mehta",
    sayName: function () {
        console.log(this.name);
    },
}

const john = {
    name : "John Doe",
    sayName: function () {
        console.log(this.name);
    },
}

function sayMyName() {
    console.log(this.name);
}

sayMyName();
john.sayName.call(sanjay); // call doesn't return you a function
sayMyName.call(john);


// bind returns a function
const newFn = john.sayName.bind(sanjay);

newFn();
newFn();
newFn();
newFn();

setTimeout(newFn, 3 * 1000);

// closure
setTimeout(() => john.sayName(), 3 * 1000);



