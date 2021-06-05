
class Person {
    constructor(name){
        this.name = name;
    }
    walk(){
        console.log(this.name+" is walking");
    }
}
// class Teacher extends Person{                     //Default constructor
//     teaches(){
//         console.log(this.name + " teaches");
//     }
// }

// const person1 = new Teacher("Rohindh")
// person1.walk();
// person1.teaches();

class Teacher extends Person{
    constructor(name,degree) {
        super(name);
        this.degree = degree;
    }
    teaches(){
        console.log(this.name + " Studied "+this.degree);
    }
}

const person1 = new Teacher("Rohindh","B.E")
person1.walk();
person1.teaches();