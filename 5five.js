for(var i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 0);
}

console.log("Let is local and var is global");

for(let i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 0);
}