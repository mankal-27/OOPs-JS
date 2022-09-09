var sayHi = new Function("console.log(\"HI!\");");

sayHi();

var sayHi2 = sayHi;

sayHi2();

var numbers = [1,5,8,4,7,10,2,6];
numbers.sort(function(first,second){
    return first - second;
});

console.log("----------------Original Numbers----------------", numbers);

numbers.sort();

console.log("----------------Sorted Numbers-------------------", numbers)

function reflect(value){
    return value;
}

console.log(reflect("hi!"));
console.log(reflect("HI!", 25));
console.log(reflect.length);

reflect = function(){
    return arguments[0];
}

console.log(reflect("hi!"));
console.log(reflect("HI---!", 25));
console.log(reflect.length);