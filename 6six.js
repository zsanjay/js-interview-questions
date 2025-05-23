var fullname = "Piyush Garg";

var obj = {
    fullname: "Hacked Full Name",

    prop: {
        fullname : "Inside Prop",
        getFullName: function () {
            return this.fullname;
        },
    },

    getFullName: function () {
        return this.fullname;
    },

    getFullNameV2: () => this.fullname, // this in the arrow function refers to global context and in browser window object.

    getFullNameV3: (function () {
        console.log(this);
        return this.fullname;
    })(),
};

console.log(obj.prop.getFullName());
console.log(obj.getFullName());
console.log(obj.getFullNameV2());
console.log(obj.getFullNameV3); 