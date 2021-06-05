// by default classes are private. to make it visible we need to use export
export class Person {
    constructor(name){
        this.name = name;
    }
    walk(){
        console.log(this.name+" is walking");
    }
}