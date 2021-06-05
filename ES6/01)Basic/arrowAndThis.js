const person = {
    walk(){
        console.log(this);
    },
    talk(){
        var self = this;
        setTimeout(function(){
            console.log("self",self);
            console.log(this); //this refers to window not talk
        },1000);
    },
    thistalk(){  
        setTimeout(() => {
            console.log("this",this); //this refers to talk in arrow function
        },1000);
    }
}
person.walk();
person.talk();
person.thistalk();