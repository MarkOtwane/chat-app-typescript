"use strict";
// INHERITANCE 
Object.defineProperty(exports, "__esModule", { value: true });
// idea of inhering properties from a super class using extend keyword
class User {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hello ${this.name} welcome`;
    }
}
class Librarian extends User {
    constructor(name, department) {
        super(name); //calls the parent construct
        this.department = department;
    }
}
const librarian = new Librarian("Joe", "ICT");
console.log(librarian.greet());
console.log(librarian.department);
