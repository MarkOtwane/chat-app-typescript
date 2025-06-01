"use strict";
// Create a Book class with title and borrow method.
// Create an EBook class that inherits Book, adding fileSize.
// Test borrow on an EBook instance.
class Book {
    constructor(title) {
        this.title = title;
    }
    borrowBook(author) {
        return `${this.title} is written by ${author}`;
    }
}
class Ebook extends Book {
    addFiles() {
        return `add the file of this book ${this.title} which is written by ${this.borrowBook("Jame")}`;
    }
}
const lib = new Ebook("Atomic Habits");
console.log(lib.addFiles());
// COnstructors
