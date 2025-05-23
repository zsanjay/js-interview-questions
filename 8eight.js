const obj = {
    height : 30,
};

console.log(obj.height);

delete obj.height;

console.log(obj.height);

// it will create the object under prototype
const objPrototype = Object.create({
    height : 30,
})

console.log(objPrototype.height);

// Delete doesn't work with prototype
delete objPrototype.height;

console.log(objPrototype.height);