"use strict";
// Create a User class with name (string) and id (number) properties, and a greet method.
// Instantiate two users and call greet on each.
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    greet() {
        return `${this.name} how are you`;
    }
}
const user1 = new User("Mark", 123345);
const use21 = new User("Joe", 123345);
console.log(user1.greet());
console.log(use21.greet());
