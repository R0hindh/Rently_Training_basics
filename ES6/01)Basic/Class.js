const person = {
    name : "Rohindh",
    walk(){
        console.log("walk");
    }
}

class Person {
    constructor(name){
        this.name = name;
    }
    walk(){
        console.log(this.name+" is walking");
    }
}

const person1 = new Person("Rohindh")
person1.walk();