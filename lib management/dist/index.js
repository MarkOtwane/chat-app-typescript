"use strict";
// shorthand  in constructor, where parameters with access modifier of public automatically become class propertiess reducing the nedd of the this keey word 
// Create a User class with shorthand properties name and email.
// Add a getProfile method returning a formatted string.
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    getProfile() {
        return `${this.name} your email is ${this.email}`;
    }
}
const user = new User("Mark", "mark@gmail.com");
console.log(user.getProfile());
