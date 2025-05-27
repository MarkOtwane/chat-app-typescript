"use strict";
// Shorthand Property Initialization 
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getDetails() {
        return `${this.title} by ${this.author}`;
    }
}
const book = new Book("1998", "King David");
console.log(book.getDetails());
// shorthand  in constructor, where parameters with access modifier of public automatically become class propertiess reducing the nedd of the this keey word 
