// INHERITANCE 

import { log } from "console";

// idea of inhering properties from a super class using extend keyword
class User{
    constructor(public name: string){}
    greet(): string{
        return `Hello ${this.name} welcome`
    }
}

class Librarian extends User{
    constructor(name:string, public department:string){
        super(name) //calls the parent construct
    }
}

const librarian = new Librarian("Joe", "ICT")
console.log(librarian.greet());
console.log(librarian.department);

