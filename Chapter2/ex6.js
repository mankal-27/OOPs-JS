var person = {
    name: "Nicholas",
    sayName: function(){
        console.log(person.name);
    }
};

person.sayName();
person.sayName("Herro");

function sayNameForAll(){
    console.log(this.name);
}

var person1 = {
    name: "Nicholas",
    sayName: sayNameForAll
}

var person2 = {
    name: "Greg",
    sayName: sayNameForAll
}

var name = "Micheal";

person1.sayName();
person2.sayName();

sayNameForAll();