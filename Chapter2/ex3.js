function sum(){
    var result = 0;
    i = 0;
    len = arguments.length;

    while(i < len){
        result += arguments[i];
        i++;
    }
    return result;
}

console.log(sum(1,2));
console.log(sum(2,3,4,5));
console.log(sum(50));
console.log(sum())