async function getData() {
    return 1;
}

console.log("A");
console.log("B");

setTimeout(() => console.log("C"), 0); // Task Queue / Callback Queue - Low Priority

getData().then(() => console.log("I got the data")); // Micro Task Queue - High Priority

console.log("D");
console.log("E");
console.log("F");

Promise.resolve().then(() => console.log("D")); // Micro Task Queue - High Priority

