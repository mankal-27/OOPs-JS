var items = [];
var object = {};

function reflect(value){
    return value;
}

console.log(typeof reflect)
console.log(items instanceof Array);
console.log(object instanceof Object);
console.log(reflect instanceof Function);