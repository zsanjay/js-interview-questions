function a() {
    console.log("A");
}

setTimeout(() => console.log("B"), 0); // set Timeout execute later

a();

console.log("C");

Promise.resolve().then(() => console.log("D")); // Promise resolve first

