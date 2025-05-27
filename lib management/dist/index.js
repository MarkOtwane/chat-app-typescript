"use strict";
class Book {
    // constructor
    constructor(title, isAvailable) {
        this.title = title;
        this.isAvailable = isAvailable;
    }
    borrow() {
        if (this.isAvailable) {
            this.isAvailable = true;
            return `${this.title} borrowed successfully`;
        }
        return `${this.title} is not available`;
    }
}
const book = new Book("Mark", true);
console.log(book.borrow());
