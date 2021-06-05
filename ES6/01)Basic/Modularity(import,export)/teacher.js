import {Person} from './person.js';

// by default classes are private. to make it visible we need to use export
export class Teacher extends Person{
    constructor(name,degree) {
        super(name);
        this.degree = degree;
    }
    teaches(){
        console.log(this.name + " Studied "+this.degree);
    }
}